interface __listAir {
  id: number,
  code: string,
  name: string,
  address: string,
  dateActive: string,
}

export const listAir:__listAir[]=[{
  id:1,
  code:'HN_Air_KHI',
  name:'Ha Noi Capital',
  address:'556 Nguyen Van Cu, Gia Thuy Ward, Long Bien District, Ha Noi Capital',
  dateActive:'20/05/2020'
},{
  id:2,
  code:'DN_Air_KHI',
  name:'Da Nang City',
  address:'Thach Quang Ward, Hai Chau District, Da Nang City',
  dateActive:'20/05/2020'
},{
  id:3,
  code:'HCM_Air_KHI',
  name:'Ho Chi Minh City',
  address:'Ben Nghe Ward,  District 1, Ho Chi Minh City',
  dateActive:'20/05/2020'
}]