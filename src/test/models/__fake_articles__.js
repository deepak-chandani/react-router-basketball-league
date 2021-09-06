const articles = [
  {
    date: "2021-01-01T00:00:00.000Z",
    title: "close out big game",
    id: "close-out-big-game",
    body: "Eu dolor Lorem irure cillum dolore reprehenderit et id occaecat laboris aute commodo. Tempor amet nulla excepteur ut cupidatat in Lorem. Incididunt consequat dolor dolor anim officia anim incididunt culpa consequat nulla. Excepteur sunt magna ad consequat duis. Mollit labore fugiat cillum occaecat sit ullamco amet voluptate proident et. Deserunt non do non culpa. Quis commodo fugiat cillum ut culpa laborum velit commodo non id aliquip minim magna. Proident ea anim ipsum. Ea ea cupidatat minim dolor. Ullamco labore id magna cupidatat non deserunt laborum veniam sint qui nulla esse. Nostrud reprehenderit deserunt labore ad commodo id ex aliquip incididunt excepteur sunt pariatur. Est eu mollit nisi non occaecat irure in excepteur est qui fugiat veniam. Cupidatat occaecat cupidatat esse reprehenderit reprehenderit et quis est. Eiusmod dolor est dolore consequat sint est est incididunt magna ut in. Dolor quis veniam esse. Aliquip laborum excepteur pariatur nulla laboris. Duis minim ea voluptate irure dolore. Sint cupidatat ut adipisicing."
  },
  {
    date: "2020-12-29T00:00:00.000Z",
    title: "fall into late slump",
    id: "fall-into-late-slump",
    body: "Proident aliqua sint in consectetur duis anim ut. Laboris et ex dolor esse reprehenderit magna enim. Qui exercitation enim ipsum sunt proident anim est. Irure ut nisi reprehenderit duis et. Labore culpa ex minim ad duis sunt cillum. Ea aliquip aliquip nostrud nisi in quis qui ea minim ad pariatur. Aliquip ea tempor adipisicing sunt ut non aute. Id adipisicing aliquip veniam labore consequat irure consectetur mollit eu eu aliqua ut. Nulla pariatur et ea consectetur et sit ipsum culpa officia deserunt nulla voluptate. Voluptate eiusmod reprehenderit velit qui mollit culpa ut eiusmod reprehenderit ut. Ipsum ut enim tempor tempor reprehenderit aute. "
  },
  {
    date: "2020-12-15T00:00:00.000Z",
    title: "lose key player",
    id: "lose-key-player",
    body: "Nisi deserunt qui esse amet laborum ipsum non adipisicing eiusmod aute qui amet laborum. Do mollit quis non excepteur laboris nulla officia in duis commodo consequat enim. Elit sit Lorem reprehenderit non ex laboris ullamco est magna dolore et do. Commodo aliqua exercitation aliqua culpa ullamco Lorem sunt officia nostrud duis consequat. Id minim labore sint esse ut aute laborum. "
  },
  {
    date: "2020-12-11T00:00:00.000Z",
    title: "heating up in October",
    id: "heating-up-in-october",
    body: "Proident ex est in et laborum enim Lorem officia proident. Adipisicing officia et nulla exercitation. Adipisicing enim ut tempor anim aliquip dolore consectetur cillum reprehenderit quis. Ipsum dolore ut eu in proident dolore enim consectetur tempor. Mollit elit veniam occaecat adipisicing nostrud exercitation dolor et pariatur Lorem excepteur nostrud. Ullamco excepteur sint proident proident sit. "
  },
  {
    date: "2020-12-03T00:00:00.000Z",
    title: "continue to get worse",
    id: "continue-to-get-worse",
    body: "Ea non nisi magna fugiat ipsum nostrud amet. Consectetur veniam qui adipisicing culpa reprehenderit dolore nisi commodo ea voluptate nulla aliquip. Exercitation proident exercitation enim est consequat deserunt pariatur ea ipsum. Sit Lorem et aute aute magna aliqua reprehenderit sit ut Lorem nulla incididunt duis. Amet nisi anim labore. "
  },
  {
    date: "2020-11-19T00:00:00.000Z",
    title: "lose. Again.",
    id: "lose-again",
    body: "Eu veniam velit incididunt incididunt non dolore incididunt. Aliquip ex commodo exercitation aute consectetur aute nostrud deserunt fugiat. Qui aute aliqua non dolore. Laboris Lorem exercitation occaecat ullamco amet sit commodo duis in ex aliqua. Exercitation aliquip magna sit anim esse consequat veniam irure. Veniam deserunt ad ut cillum cillum in. Quis nulla et eiusmod. "
  },
  {
    date: "2020-11-11T00:00:00.000Z",
    title: "get free agent for cheap",
    id: "get-free-agent-for-cheap",
    body: "Enim aliquip nisi duis. Qui sunt aliquip sit eiusmod reprehenderit duis eiusmod elit deserunt fugiat ullamco labore qui sunt do. Cupidatat et veniam ullamco ea tempor quis adipisicing occaecat aute excepteur laborum nisi. Proident tempor eu veniam consequat minim. Sit voluptate duis ea occaecat sint laborum ut eu tempor dolor nisi dolor aute ex exercitation. Laborum deserunt Lorem enim veniam sunt labore. "
  },
  {
    date: "2020-10-12T00:00:00.000Z",
    title: "off to great start",
    id: "off-to-great-start",
    body: "Nostrud dolor id do officia esse culpa et amet. Voluptate velit pariatur ullamco cillum consectetur. Amet minim minim id voluptate. Aliqua duis ex commodo cillum pariatur reprehenderit ut aliquip aliquip eu consequat duis occaecat. Laboris labore dolore et laboris nostrud nisi deserunt ea veniam amet culpa minim aliquip nulla. "
  },
  {
    date: "2020-10-05T00:00:00.000Z",
    title: "lose another to injury",
    id: "lose-another-to-injury",
    body: "Reprehenderit esse reprehenderit esse Lorem mollit id officia deserunt nisi occaecat dolore excepteur amet. Eu aliqua fugiat id qui ex dolor dolore magna culpa incididunt duis reprehenderit minim sint. Consequat laborum officia et in sit. Labore ea amet cillum. Culpa sint laborum ad. Eiusmod ut non amet consectetur magna exercitation est aliquip nisi consectetur anim nostrud do commodo. "
  },
  {
    date: "2020-09-04T00:00:00.000Z",
    title: "worst case scenario",
    id: "worst-case-scenario",
    body: "Ullamco excepteur anim exercitation aute qui sunt Lorem culpa adipisicing id enim sint cillum. Ad adipisicing amet culpa aute deserunt veniam qui incididunt velit dolore exercitation est esse Lorem est. Irure laborum exercitation veniam labore laborum laborum nulla tempor consequat tempor deserunt aliqua labore exercitation. "
  },
  {
    date: "2020-08-29T00:00:00.000Z",
    title: "defy all odds",
    id: "defy-all-odds",
    body: "Fugiat id id aute labore excepteur consequat. Eiusmod consequat in cupidatat eu non adipisicing. Aliquip cillum exercitation veniam dolore Lorem est Lorem sunt esse exercitation. Magna sit fugiat excepteur duis sit cillum consectetur aliquip. Exercitation dolor proident Lorem fugiat exercitation culpa excepteur laborum proident consequat pariatur laboris."
  },
  {
    date: "2020-07-11T00:00:00.000Z",
    title: "are young but determined",
    id: "are-young-but-determined",
    body: "Do aute consectetur commodo tempor sint nisi nostrud. Cupidatat commodo sit occaecat occaecat cupidatat esse fugiat esse ad laboris proident. Aliquip in sit reprehenderit proident laborum ad dolor consequat adipisicing non aute duis. Id laboris culpa sunt quis ex aute officia officia pariatur excepteur quis. "
  },
  {
    date: "2020-06-14T00:00:00.000Z",
    title: "keep the streak alive",
    id: "keep-the-streak-alive",
    body: "Aliquip elit duis ea est ex occaecat qui do ullamco Lorem id ut eiusmod. Voluptate minim duis amet officia dolor voluptate dolore est laborum ad labore officia dolore. Tempor magna aute minim adipisicing in aute aute laboris nulla ex. Adipisicing aute duis sit ea non sint ut est ullamco sit magna excepteur culpa. Est quis sit Lorem id."
  },
  {
    date: "2020-07-06T00:00:00.000Z",
    title: "have eye on the prize",
    id: "have-eye-on-the-prize",
    body: "Eu minim esse laboris. Aute irure excepteur officia incididunt ut aliqua id ad tempor. Officia incididunt sunt officia qui. Aliqua proident minim magna mollit consectetur sit fugiat qui dolor sunt. Minim eiusmod ipsum aliquip officia dolor eiusmod adipisicing ad est reprehenderit aliquip dolor reprehenderit enim. Anim incididunt id in commodo eiusmod. "
  },
  {
    date: "2020-06-04T00:00:00.000Z",
    title: "are all washed up",
    id: "are-all-washed-up",
    body: "Sunt cupidatat consequat laboris dolor et sunt dolore et deserunt ut laborum. Fugiat sunt enim magna aute sunt Lorem esse ea commodo incididunt adipisicing laborum. Eu tempor non nostrud consequat do culpa laboris ipsum ex sit Lorem cillum et dolore. Sint culpa ipsum aute consectetur ut consectetur mollit ullamco exercitation laborum enim enim adipisicing. Sit qui reprehenderit adipisicing aliqua deserunt pariatur esse non est commodo. Ut aliqua anim excepteur incididunt officia amet cupidatat laboris elit adipisicing eiusmod id. "
  },
];


export default articles