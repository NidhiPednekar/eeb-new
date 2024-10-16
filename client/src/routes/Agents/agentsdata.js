const agents = [
  {
    id: 1,
    name: 'John Doe',
    image: 'https://media.istockphoto.com/id/1318858332/photo/headshot-portrait-of-smiling-female-employee-posing-in-office.jpg?s=612x612&w=0&k=20&c=2qUeKwMylyZJueQnvpg22iCA758VcM8gF_i8MQih3aw=',
    fee: '$50/hour',
    contact: 'john.doe@example.com',
    phone: '123-456-7890',
    description: 'Experienced in residential properties.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: 'https://media.istockphoto.com/id/1494512819/photo/real-estate-agent-man-keys-and-studio-portrait-with-smile-dream-and-excited-face-for-new-home.jpg?s=612x612&w=0&k=20&c=gBckKwHPUcTBt0aK0bj1nezmxBhMAibK49pRlvOODKE=',
    fee: '$75/hour',
    contact: 'jane.smith@example.com',
    phone: '234-567-8901',
    description: 'Specializes in commercial real estate.',
  },
  {
    id: 3,
    name: 'Michael Johnson',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCCSTF5DrwFwrfNTQyDxu6CjoL7Six19KMbQ&s',
    fee: '$60/hour',
    contact: 'michael.johnson@example.com',
    phone: '345-678-9012',
    description: 'Expert in rental properties.',
  },
  {
    id: 4,
    name: 'Emily Davis',
    image: 'https://rimh2.domainstatic.com.au/4vx8q7RxKD9-iSZSgy3zqJkIoKU=/232x232/top/filters:no_upscale():format(jpeg):quality(85)/https://images.domain.com.au/img/20444/contact_1077970.jpeg?date=638228529103889178',
    fee: '$65/hour',
    contact: 'emily.davis@example.com',
    phone: '456-789-0123',
    description: 'Focuses on luxury homes.',
  },
  {
    id: 5,
    name: 'Chris Lee',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm0hpAdjH74rJqtT9OC4cneXeCCgwQvqK2lc47Acs2M26tIZrTCtpnZNxHrjExYtvQeZ0&usqp=CAU',
    fee: '$55/hour',
    contact: 'chris.lee@example.com',
    phone: '567-890-1234',
    description: 'Specializes in apartment rentals.',
  },
  {
    id: 6,
    name: 'Anna Williams',
    image: 'https://images.ratemyagent.com/ratemyagent/image/upload/q_auto:best,f_auto,w_200,h_200,c_limit,c_pad/cdn/photo/2023-11-22-0120-3337-377923.png',
    fee: '$70/hour',
    contact: 'anna.williams@example.com',
    phone: '678-901-2345',
    description: 'Expert in commercial properties.',
  },
  {
    id: 7,
    name: 'David Brown',
    image: 'https://images.ratemyagent.com/ratemyagent/image/upload/q_auto:best,f_auto,w_200,h_200,c_limit,c_pad/cdn/photo/2023-11-22-0120-3337-377923.png',
    fee: '$80/hour',
    contact: 'david.brown@example.com',
    phone: '789-012-3456',
    description: 'Known for investment properties.',
  },
  {
    id: 8,
    name: 'Megan Wilson',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu0NrFr2jjok94LVavH9HF3dDCTRzlgJ_VFQ&s',
    fee: '$85/hour',
    contact: 'megan.wilson@example.com',
    phone: '890-123-4567',
    description: 'Experienced in waterfront properties.',
  },
  {
    id: 9,
    name: 'Joshua Martinez',
    image: 'https://d2hqr1s9kfm9jo.cloudfront.net/production/images/sales_agents/17043/Sam_Cropped.profile.jpg',
    fee: '$45/hour',
    contact: 'joshua.martinez@example.com',
    phone: '901-234-5678',
    description: 'Specializes in new developments.',
  },
  {
    id: 10,
    name: 'Sophia Anderson',
    image: 'https://sg.tepcdn.com/public/usr/2v8gvg/15cf7e-PEO-JEREMY-LIM-05-AC.jpg',
    fee: '$90/hour',
    contact: 'sophia.anderson@example.com',
    phone: '012-345-6789',
    description: 'Focuses on historical homes.',
  },
  {
    id: 11,
    name: 'James Taylor',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDFxSNOVhWFO1kLgJMvOfscuhwrMGlhip2BeAEHQUBo3BhxHlkJ8MronnB70SKoeoPFPs&usqp=CAU',
    fee: '$100/hour',
    contact: 'james.taylor@example.com',
    phone: '123-456-7891',
    description: 'Expert in suburban properties.',
  },
  {
    id: 12,
    name: 'Olivia Thomas',
    image: 'https://images.augustman.com/wp-content/uploads/sites/2/2022/11/04131458/JEREMY-LIM_L7A0928-scaled-e1667539333390.jpg',
    fee: '$110/hour',
    contact: 'olivia.thomas@example.com',
    phone: '234-567-8902',
    description: 'Known for luxury condos.',
  },
  {
    id: 13,
    name: 'Daniel Harris',
    image: 'https://kingoneproperties.com/wp-content/uploads/2023/09/Ksenia_Novozhilova-kingone-agent-profile-page.jpg',
    fee: '$95/hour',
    contact: 'daniel.harris@example.com',
    phone: '345-678-9013',
    description: 'Specializes in rural properties.',
  },
  {
    id: 14,
    name: 'Ava Clark',
    image: 'https://media.istockphoto.com/id/1307791650/photo/headshot-portrait-of-smiling-caucasian-businessman-pose-at-workplace.jpg?s=612x612&w=0&k=20&c=Guj8f7rGyX4tsSszs3qR_NCYDOOvypB6T3eSPEB9GOQ=',
    fee: '$105/hour',
    contact: 'ava.clark@example.com',
    phone: '456-789-0124',
    description: 'Experienced in downtown real estate.',
  },
  {
    id: 15,
    name: 'Matthew Lewis',
    image: 'https://resources.atproperties.com/headshots/GinaMaglish.9915.type3.601abc7fc86a9.jpg',
    fee: '$115/hour',
    contact: 'matthew.lewis@example.com',
    phone: '567-890-1235',
    description: 'Focuses on foreclosed properties.',
  },
  {
    id: 16,
    name: 'Isabella King',
    image: 'https://media.istockphoto.com/id/1191132083/photo/head-shot-portrait-of-young-happy-confident-businessman.jpg?s=612x612&w=0&k=20&c=G5HOxX9nuFHQS6b7j2iFch5odaKJ9ZwaVnZJcCydUf4=',
    fee: '$120/hour',
    contact: 'isabella.king@example.com',
    phone: '678-901-2346',
    description: 'Specializes in lease properties.',
  },
  {
    id: 17,
    name: 'Ethan Wright',
    image: 'https://media.istockphoto.com/id/1199100409/photo/portrait-of-successful-businessman.jpg?s=612x612&w=0&k=20&c=U7fzV2RqONjttzqr4r_cGHWueUN3SP8BOH4mn0hiw4E=',
    fee: '$125/hour',
    contact: 'ethan.wright@example.com',
    phone: '789-012-3457',
    description: 'Expert in mixed-use properties.',
  },
  {
    id: 18,
    name: 'Mia Scott',
    image: 'https://media.istockphoto.com/id/1573787497/photo/happy-smile-and-portrait-of-man-in-office-for-business-professional-and-executive-mission.jpg?s=612x612&w=0&k=20&c=2WhMW51Xk0WUKJRtETo7n6Dz63oJX1d5tCJWM85FRCE=',
    fee: '$130/hour',
    contact: 'mia.scott@example.com',
    phone: '890-123-4568',
    description: 'Known for eco-friendly homes.',
  },
  {
    id: 19,
    name: 'Alexander Green',
    image: 'https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY=',
    fee: '$140/hour',
    contact: 'alexander.green@example.com',
    phone: '901-234-5679',
    description: 'Focuses on multi-family properties.',
  },
  {
    id: 20,
    name: 'Charlotte Hill',
    image: 'https://media.istockphoto.com/id/1806223369/photo/portrait-of-a-young-investor-banker-at-the-workplace-inside-the-bank-office-a-businessman-in.jpg?s=612x612&w=0&k=20&c=9SBqYUyIqPQA2SBD6u0OhKskHZciDdrACE3GoVU5v9U=',
    fee: '$150/hour',
    contact: 'charlotte.hill@example.com',
    phone: '012-345-6780',
    description: 'Specializes in luxury rentals.',
  },
];

export default agents;
