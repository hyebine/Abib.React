//mini sqltable

// export interface Apimini {
//   id: number;
//   nm: string;
//   href: string;
// }

//gnb sqltable

export interface Apiall {
  id: number;
  nm: string;
  title?: string;
  en?: string;
  txt?: string;
  price?: number;
  href: string;
  bg?: string;
  bg2?: string;
  cate_id?: number;
  parent_id?: number;
  day?: string;
  content?: string;
}


// export interface Apignbmini {
//   id: number;
//   nm: string;
//   href: string;
//   parent_id?: number;
// }


// products sqltable

export interface Apiproducts {
  id: number;
  nm: string;
  en: string;
  txt: string;
  price: number;
  href: string;
  bg: string;
  cate_id: number;
}

//main swiper

// export interface Apimain {
//   id: number;
//   title: string;
//   txt: string;
//   day: string;
//   bg: string;
//   href: string;
// }



//category

// export interface Apicategory {
//   id: number;
//   nm: string;
//   href: string;
//   bg: string;
// }

//best

// export interface Apibest {
//   id: number;
//   title: string;
//   txt: string;
//   href: string;
//   bg: string;
//   bg2: string;
// }


//brandMain

// export interface ApibrandMain {
//   id: number;
//   title: string;
//   txt: string;
//   content: string;
//   href: string;
//   bg: string;
// }

// apply form

export interface Apiapply {
  id: number;
  name: string;
  phone: string;
  question: string;
  todate?: string;
}


//eventpage 

// export interface Apievents {
//   id: number;
//   title: string;
//   href: string;
//   bg: string;
// }

