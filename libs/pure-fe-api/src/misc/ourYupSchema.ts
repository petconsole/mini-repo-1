import * as yup from 'yup';
import { ObjectShape } from 'yup/lib/object';

const ourYupSchema = () => {
  const yupSchemaObject = (props: ObjectShape) => yup.object(props).noUnknown(true);

  // required, ensure, default, trim, nullable, min, max, uppercase
  const maxNameLength = 30;

  const schemaObject = yup.object || {}; // or condition prevents syntax warning on use

  const maxString = (max: number) => yup.string().ensure().trim().max(max);
  const maxReqString = (max: number) => maxString(max).required();
  const minMaxString = (min: number, max: number) => maxReqString(max).min(min);

  const schemaObjects = {
    array: () => yup.array().default([]),
    arrayOf: (props: ObjectShape) => yup.array().default([]).of(yupSchemaObject(props)),
    boolean: (initial = false) => yup.boolean().default(initial),
    date: () => yup.string().nullable().default(null),
    email: (required = false) =>
      required ? yup.string().required().email() : yup.string().ensure().email(),
    googleLocation: yup.mixed,
    maxString,
    maxReqString,
    minMaxString,
    name: (required = true, max = maxNameLength) => (required ? maxReqString(max) : maxString(max)),
    number: (initial = 0) => yup.number().default(initial),
    phone: (maxChars = 20) => yup.string().ensure().max(maxChars),
    positive: (initial = 0) => yup.number().default(initial).min(0),
    stars: () => yup.array().default(new Array(10).fill(0)),
    strim: () => yup.string().ensure().trim(),
    triple: (initial = false) => yup.boolean().nullable().default(initial),
    url: (url = '') => yup.string().ensure().url().default(url),
  };

  return { schemaObject, schemaObjects };
};

export default ourYupSchema;
