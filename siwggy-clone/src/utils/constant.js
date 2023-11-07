/**
 * if any constant needed then here we will define the constant and export the file
 */
export const Image_CDN_Url =
  'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/';

const discountInfo = [
  {
    id: '1',
    header: '₹ 125 OFF',
    subheader: 'UPTO ₹ 300',
  },
  {
    id: '2',
    header: '₹ 150 OFF',
    subheader: 'UPTO ₹ 520',
  },
  {
    id: '3',
    header: '₹ 80 OFF',
    subheader: 'UPTO ₹ 275',
  },
  {
    id: '4',
    header: '₹ 135 OFF',
    subheader: 'BUY 3',
  },
  {
    id: '5',
    header: '₹ 60 OFF',
    subheader: 'UPTO ₹ 180',
  },
];

const discountInfoV = discountInfo.map((item) => item);

export const headerData = discountInfoV[Math.floor(Math.random() * 5)];
// console.log(headerData);
