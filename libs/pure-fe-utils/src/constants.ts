export const ourDateFormat = {
  // dayAndSeconds: 'PPpp',
  displayDate: 'PP', // Jul 7, 2022
  displayDateSeconds: 'PP pp', // Jul 7, 2022 7:35:07 PM
  displayDateTime: 'PP p', // Jul 7, 2022 7:35 PM
  invalidDate: 'Invalid Date',
  monthDayYear: 'M/dd/yyyy', // 7/07/2022
  weekdayAndDisplayDate: 'eee PP', // Thu Jul 7, 2022
  weekdayAndDisplayDateTime: 'eee PP p', // Thu Jul 7, 2022 7:35 PM
  weekdayAndDisplayDateSeconds: 'eee PP pp', // Thu Jul 7, 2022 7:35:23 PM
  // weekdayAndSeconds: 'EEE LLL d, yyyy h:mm aaa',
};

// Obsolete
export const dateFormat = ourDateFormat;

// noinspection SpellCheckingInspection
export const ourUlidRegex = /^[0123456789ABCDEFGHJKMNPQRSTVWXYZ]{26}$/;
