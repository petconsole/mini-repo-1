import BaseApi from './BaseApi';
import { update } from './common';
import { Api } from '../types';

type cellType = { type: string; src: string | undefined };

const apiPath = '/blogs';
const idPath = (id: string) => `${apiPath}/${id}`;
const { getListByUrlAndCreatedBetween, ...baseApi } = BaseApi({ apiPath });

/**
 * Iterate and call the callback function for each cell.
 * @param layout 3 dimensional array
 * @param callback - function to call for each cell
 */
export const iterateLayout = (layout: [][][], callback: (cell: cellType) => unknown) => {
  if (!layout) return;

  layout.forEach((row) => {
    row.forEach((col) => {
      col.forEach((cell) => {
        callback(cell);
      });
    });
  });
};

/**
 * Handle the extraction and replacement of the image data when updating a blog post.
 * @param id - id for the blog post
 * @param body - body of the blog post
 * @returns {Promise<*>}
 */
export const updateBlog = async (id: string, body: { layout: [][][] }) => {
  const blog = { ...body };
  const imageSrc: string[] = [];

  iterateLayout(blog.layout, (cell: cellType) => {
    if (cell.type === 'image') {
      imageSrc.push(cell.src || '');

      cell.src = '';
    }
  });

  // We are not using await as we don't want to force this into blocking anything
  // The caller can await if they want to
  return update(idPath(id), blog).then((updated) => {
    iterateLayout(updated.layout, (cell: cellType) => {
      if (cell.type === 'image') {
        cell.src = imageSrc.shift();
      }
    });

    return updated;
  });
};

export const Blog: Api = {
  ...baseApi,
  iterateLayout,
  update: updateBlog,
  getListCreatedBetween: getListByUrlAndCreatedBetween,
};
