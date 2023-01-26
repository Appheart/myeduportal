const services = [
  {
    img: 'https://www.nysccbo.org.ng/nyscbo/public/web/resources/images/nysclogo.png',
    name: 'NYSC',
    link: '/NYSC',
    services: [
      {
        name: 'Verify Senate Lists',
        link: 'https://portal.nysc.org.ng/nysc1/VerifySenateLists.aspx ',
        desc: 'Check the Senate and Academic Board approved mobilisation list of their various institutions on the NYSC portal for free.',
      },
      {
        name: 'Accredited Cyber-cafe Business operators',
        link: 'https://www.nysccbo.org.ng/nyscbo/public/index.php/accredited/cbo/list',
        desc: 'Cyber Café Operators (CBO) are critical stakeholders of the National Youth Service Corps (NYSC), providing numerous online services on the NYSC portal to both prospective and serving Corps Members. Accordingly, Management of the NYSC is set to commence registration and accreditation of interested CBO to ensure sanity of activities on the NYSC portal. Thus, this document is to provide the needed guidelines for this process.',
      },
      {
        name: 'Query Trasaction Status',
        link: 'https://portal.nysc.org.ng/nysc1/Transactionstatus_Remita.aspx',
        desc: 'NYSC Payment Portal npw has an option through which Prospectives can query existing or pending transactions. Click on “continue” to query Remita and view the transaction detail',
      },
      {
        name: '2023 Fresh Registration',
        link: 'https://portal.nysc.org.ng/nysc1/CreateEmailOnly',
        desc: 'This is to inform all prospective corps members that the NYSC registration portal is currently open for registration of the 2023 Batch ‘A’ stream II mobilization. See how to access the NYSC registration portal below.',
      },
      {
        name: 'Login to Portal',
        link: 'https://portal.nysc.org.ng/nysc1/ResumePayment',
        desc: 'To login, simply enter www.portal.nysc.org.ng and the sign in page will appear on your device, then enter your ID and password',
      },
    ],
  },

  {
    name: 'JAMB',
    img: 'https://efacility.jamb.gov.ng/assets/admin/img/logo_big.png',
    link: '/jamb',
    services: [
      {
        name: 'JAMB result',
        desc: '',
        price: 2000,
        link: '/jamb',
      },
      {
        name: 'JAMB admission letter',
        desc: '',
        price: 2000,
        link: '',
      },
      {
        name: 'Check JAMB admission status',
        desc: '',
        link: '',
      },
    ],
  },

  {
    name: 'WAEC',
    img: 'https://upload.wikimedia.org/wikipedia/en/d/d9/Waec_logo.png',
  },

  {
    name: 'NECO',
    img: 'https://result.neco.gov.ng/static/Necologo.a9dac693.png',
  },
  {
    name: 'Remita',
    img: 'https://remita.net/assets/minimal/images/remita_orange_new_logo.svg',
    link: '/Remita',
  },
];

export default services;
