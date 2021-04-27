<template>
  <div class="deal-container">
    <div class="deal-page" v-show="dealType === 1">
      <h3
        class="tc"
        style='font-size:15px;text-align:center;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        注册服务协议
      </h3>
      <p
        class="tc"
        style='font-size:15px;text-align:center;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        最后更新时间：【2020】年【07】月【27】日
      </p>
      <p
        class="t2"
        style='font-size:15px;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        北京微财科技有限公司（以下简称“公司”或“本公司”）合法运营的“<span
          class="tu"
          >好分期</span
        >”平台（包括对应网站及公司已经开发及将来不时开发的自行或委托重庆市黑卡小额贷款有限公司发布的提供部分或全部公司服务功能的移动终端软件或微信平台，以下简称“本服务平台”）是一个为您提供商品交易服务、商品交易消费分期咨询服务及互联网借贷交易信息服务或与其他合作机构（包括但不限于银行、小额贷款公司、消费金融公司等金融机构、征信机构和第三方数据机构、信用咨询及管理服务机构等，以下或简称“合作机构”或“交易服务商”）共同向您提供消费分期、互联网借贷交易信息传递、信用咨询、信息审核管理、交易撮合及资金管理等技术辅助服务的网络平台，为本服务平台的注册用户（以下简称
        “用户”或“您”）以及合作机构提供互联网信息及技术服务。在成为本服务平台用户前，请您务必仔细阅读以下条款，<span
          class="fb"
          style="font-weight:bold;"
          >尤其是加粗条款（包括但不限于第十一条“适用法律和管辖”项下有关本协议争议应向本协议签署地有管辖权的人民法院提起诉讼解决的约定。），</span
        >充分理解各条款内容后再选择是否接受本协议。<span
          class="fb"
          style="font-weight:bold;"
          >一旦您提交用户注册申请，即意味着您已阅读本协议所有条款，并对本协议条款的含义及相应的法律后果已全部通晓并充分理解，同意受本协议约束。</span
        >
      </p>
      <p
        class="fb t2"
        style='font-size:15px;font-weight:bold;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        本协议已对与您的权益具有或可能具有重大关系的条款，及对公司具有或可能具有免责或限制责任的条款用粗体字予以标注，请您注意。
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        一、 本协议的签署和修订
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">1.1</span
        >&nbsp;用户应当为持有中华人民共和国有效身份证件的<span
          class="fb"
          style="font-weight:bold;"
          >22周岁（含）以上且具有完全民事行为能力和民事权利能力的自然人。</span
        >如您违反前述注册限制注册账户并使用本服务平台服务，公司有权随时中止或终止您的用户资格，并要求您的监护人承担相应的责任。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">1.2</span
        >&nbsp;本协议内容包括本协议正文所载之各条款及公司通过本服务平台已经发布的或将来可能发布的各类服务规则（以下简称“使用规则”）；<span
          class="fb"
          style="font-weight:bold;"
          >所有该等使用规则均为本协议不可分割的一部分，与本协议正文具有同等法律效力。</span
        >本协议是您与公司自愿共同签订的，适用于您在本服务平台的全部活动。<span
          class="fb"
          style="font-weight:bold;"
          >在您注册成为用户时，您已经阅读、理解并接受本协议正文的全部条款及全部使用规则，并承诺阅读、理解并接受在您注册成为用户后公司不时发布的使用规则；您同意遵守中国的各类法律、法规及规范性文件的规定，如有违反而导致任何法律后果的发生，您应以自己的名义独立承担所有相应的法律责任。</span
        >
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">1.3</span>&nbsp;<span
          class="fb"
          style="font-weight:bold;"
          >公司有权根据需要不时地修改本协议正文各条款或制定、修改各使用规则并在本服务平台相关系统板块发布，无需另行单独通知。</span
        >您应不时地注意本协议正文各条款及各使用规则的变更，若您在本协议正文相关条款和/或使用规则内容公告变更后继续使用本服务平台服务的，表示您已充分阅读、理解并接受修改后的内容，也将遵循修改后的本协议正文条款和/或使用规则使用本服务平台服务。若您不同意修改后的协议内容，您应停止使用本服务平台服务。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">1.4</span
        >&nbsp;您通过自行或授权有关主体根据本协议及有关使用规则、说明操作确认本协议后，本协议即在您和公司之间产生法律效力。<span
          class="fb"
          style="font-weight:bold;"
          >您因接受本服务平台服务而与您的交易服务商及其他服务的公司的合作机构及其注册用户之间产生的法律关系或法律纠纷均由您自行承担及解决，公司不承担任何责任；您在此同意将全面接受和履行通过本服务平台与交易服务商及其注册用户之间以电子形式签订的任何法律文件，并承诺按该等法律文件享有和/或放弃相应的权利、承担和/或豁免相应的义务。</span
        >
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        二、 服务的提供
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">2.1</span
        >&nbsp;公司通过本服务平台提供的服务包括但不限于：
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j3">2.1.1</span>账户注册
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="fb" style="font-weight:bold;"
          >公司根据您提供的数据与信息，经过相应身份验证程序后接受您注册为本服务平台用户。</span
        >
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j3">2.1.2</span>信息传递
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="fb" style="font-weight:bold;"
          >当您在本服务平台账户进行相关操作并根据要求完成资料提交时，公司将根据您的选择和授权，自行或委托合作机构对您的信用等级、资产状况和还款能力等进行评估，并及时向您反馈您的预估可用信用额度、实际可用信用额度及申请结果等信息（以届时本服务平台实际提供的信息为准）。通过信用审核、评估后，公司会根据您的选择，为您提供借款撮合、信用卡分期还款以及商品交易消费分期服务。您在此不可撤销地同意并授权，公司可以为本第2.1.2条之目的将您向公司提供的信息提交至公司合作机构以满足您的借款或消费分期需求而向您提供进一步的服务。本服务平台通过与合作机构实现系统对接或其他方式，为您提供您与上述机构间的信息传递服务，并为您与该等合作机构签署信用咨询与管理服务及/或其他法律文件提供技术辅助服务。</span
        >
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j3">2.1.3</span>信用额度评估
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        公司会通过您向公司提供的信息以及公司自行搜集的信息对您的还款能力、还款意愿和资产状况进行评估、分析，并基于此等评估、分析不时确定、更新您的信用额度评估情况。您可通过本服务平台实时查询您的信用额度评估情况。同时，公司会将对您的信用额度评估情况实时同步至公司合作机构，以促成您与该等合作机构为您提供进一步的信用咨询与管理服务合作，或直接将您推荐至合作机构由其为您提供信用额度评估服务。公司有权根据您的信用状况随时调整对您的信用额度评估情况。您在此不可撤销的同意并授权，公司可以将本第2.1.3条项下的全部或部分事项委托给包括合作机构在内的第三方处理。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j3">2.1.4</span
        >互联网借贷交易信用咨询及管理服务及信用卡分期还款服务，包括但不限于将您推荐至本公司合作银行，由合作银行向您提供借款，并由本公司向您提供还款管理等服务。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j3">2.1.5</span
        >商品交易消费分期服务，包括但不限于向您提供商品展示、交易、消费分期等相关服务。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j3">2.1.6</span
        >资金管理技术辅助服务，包括但不限于为您提供还款资金充值、代收、代付、查询等技术辅助服务。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j3">2.1.7</span>本服务平台不时提供的其他服务内容。<span
          class="fb"
          style="font-weight:bold;"
          >本服务平台提供的其他服务内容，具体将以届时实际提供的服务内容为准。</span
        >
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">2.2</span
        >&nbsp;本服务平台将不时更新商品之价格、数量等商品信息且不另行向您通知，当您使用本服务平台的商品交易消费分期服务时，请您仔细确认您所选购的商品名称、型号、规格、价格、数量等商品信息，并准确填写您的收货地址、收货人及联系电话等信息。收货人与您本人不一致的，收货人进行收货等行为和意思表示均视为您本人的行为和意思表示，用户应对该等行为和意思表示承担连带责任。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">2.3</span
        >&nbsp;您同意并知悉，本服务平台所提供的商品之具体功能、用途等相关描述应以商品生产者提供的使用说明书为准，并按照商品生产者所提供的售后服务政策享受相关售后服务，具体请以商品订购页面展示为准。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">2.4</span
        >&nbsp;基于法律法规、监管部门的要求及/或运行和交易安全的需要，公司可以限制、改变、减少、终止或暂时停止提供本服务平台服务的部分功能，或提供、增加新的功能。在任何功能减少、增加或者变化时，只要您仍然使用本服务平台服务，即表示您同意因该等功能减少、增加或者变化而带来/导致的本协议的变更和调整并受其约束。同时，<span
          class="fb"
          style="font-weight:bold;"
          >公司有权基于交易安全、交易公平和合规性等方面的考虑以及司法机关和仲裁机构、行政机关、军事机关等有权机关不时对您使用本服务平台服务设定相应的限制，包括但不限于限制交易额度、交易次数、冻结或划扣资金等。您了解，本服务平台的前述设定可能会对您造成一定不便或限制，您对此没有异议。</span
        >
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">2.5</span
        >&nbsp;您确认，您按本服务平台服务流程通过电子的方式所确认的交易状态、操作将成为您进行相关交易或操作（包括但不限于向交易服务商发送指令、要求/授权冻结资金、充值、代为支付或收取款项、订立合同等）的明确指令。您同意本服务平台以及公司有权按您的相关指令依据本协议和/或对应法律文件对相关事项进行处理，并同意承担因此造成或引发的法律后果及责任。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">2.6</span
        >&nbsp;由于您未能及时对交易状态或操作进行修改或确认或未能提交相关申请所引起的任何纠纷或损失均由您本人负责，本服务平台以及公司不承担任何责任。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">2.7</span
        >&nbsp;您同意，公司拥有通过邮件、短信或电话等各种形式向您发送您使用本服务平台相关服务时所产生的订单信息、促销活动等信息的权利。
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        三、 账户管理及费用
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">3.1</span
        >&nbsp;在您成功注册后，您可以自行或授权您的代理人根据使用规则和说明，通过本服务平台以点击确认的方式提交服务需求（包括但不限于借款、信用卡分期还款、购买商品及消费分期等），由公司对您的服务需求和您的信息资料进行审核、评估以及决定是否向您提供相应的服务。<span
          class="fb"
          style="font-weight:bold;"
          >在任何情况下，公司不对合作机构提供的交易信息的真实性、合法性作出明示或暗示、直接或间接的担保或承担其他责任。您使用本服务平台服务进行交易而产生的交易风险、损失，均由您自行承担。</span
        >
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">3.2</span>&nbsp;<span
          class="fb"
          style="font-weight:bold;"
          >您应确保您向公司提供的注册资料真实、准确、完整且合法有效，如您的注册资料发生变动，应及时进行更新。如您提供的注册资料不真实、不准确、不完整或不合法，您需承担因此引起的任何责任及后果，公司保留终止您使用本服务平台各项服务的权利。</span
        >
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">3.3</span>&nbsp;<span
          class="fb"
          style="font-weight:bold;"
          >公司将在服务过程中根据有关法律文件和相关使用规则收取必要的服务或管理费用，其具体内容、比例、金额等事项请参见交易过程中您签署的法律文件及相关使用规则。</span
        >
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        四、 交易资金管理
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">4.1</span
        >&nbsp;为了便利您的交易，公司将提供技术服务，以便于您的交易服务商通过第三方合作机构（包括但不限于支付机构、金融机构等，下称第三方机构）为您提供交易资金管理服务（具体的交易资金管理服务以您和相关方签署的法律文件约定为准）。同时，如果您的交易服务商通过本服务平台的充值等功能为您提供代收、代付等服务，则本服务平台将为您和您的交易服务商如实记录您的充值、还款、提现等交易记录。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">4.2</span
        >&nbsp;您了解，上述第三方机构将在您接受交易服务商的资金管理服务过程中为您提供有关资金划付、存管、查询等方面的服务。<span
          class="fb"
          style="font-weight:bold;"
          >如果就该等服务事宜，您与第三方机构另行签署了相应的法律文件，则具体服务事项以及各方权利义务以该等法律文件约定为准。</span
        >您同意：(a)
        受第三方机构可能仅在工作日进行资金代扣及划转等各种原因所限，公司及您的交易服务商不对前述服务的资金到账时间做任何承诺，也不承担与此相关的责任，包括但不限于由此产生的利息、货币贬值等损失；(b)
        一旦您使用前述服务，即表示您不可撤销地进行相关操作，且该等操作是不可逆转的，您不能以任何理由拒绝付款或要求取消交易；(c)就第三方机构提供的服务，您应按照有关法律文件及第三方机构的规定向其支付相应的费用，同时，<span
          class="fb"
          style="font-weight:bold;"
          >您与第三方机构之间就服务提供、费用支付等事项而产生的争议或纠纷，均由当事方自行解决，公司不承担任何直接或间接、全部或部分赔偿责任、担保责任和其他任何法律责任。</span
        >
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">4.3</span
        >&nbsp;您保证并承诺您通过本服务平台进行交易的资金来源合法。您同意，公司有权按照包括但不限于司法机关和仲裁机构、行政机关、军事机关等有权机关的要求协助其对您的账户及资金等进行查询、冻结或扣划等操作。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">4.4</span
        >&nbsp;如果本服务平台出现因系统故障或其他原因导致的处理错误，无论是有利于公司、任何交易方或交易服务商还是有利于您，公司都应当并有权通知您该等故障或错误以及纠正该等错误，各方权利义务应恢复至如果没有发生该等系统故障或处理错误双方应该享有或承担的权利义务。如果该等错误导致您实际支付或获得的金额与您应当支付或获得的金额不一致的，则在公司通知您该等处理错误后，您将收到您因该等处理错误而少收或多付的款项，您亦有义务按照公司的通知将您多收或少付的款项予以返还或补足。<span
          class="fb"
          style="font-weight:bold;"
          >您理解并同意，您因前述处理错误而少收或多付的款项均不计利息，除按照前述规定进行返还或划扣外，公司不承担因前述处理错误而导致的任何其他损失或责任（包括您可能因前述错误导致的利息、汇率等损失）。</span
        >
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        五、 配送
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">5.1</span
        >&nbsp;当您使用本服务平台订购商品时，本服务平台可能自行或委托第三方合作平台向您提供配送服务，将您订购的商品配送至您指定收货地址。本服务平台所展示的配送时间仅供参考，实际配送时间可能根据库存情况、交通路况以及天气状况等有所变化。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">5.2</span
        >&nbsp;如您提供的配送信息错误或不准确，商品送达无人签收，情势变更或不可抗力（包括但不限于自然灾害、交通管制或战争等）导致无法配送的，本服务平台不承担因迟延配送所产生的任何责任。
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        六、 电子合同
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">6.1</span
        >&nbsp;您因接受本服务平台服务而与公司之间签署的包括本协议在内的各项法律文件，均采用电子方式订立，每一份法律文件可以有多份副本，并且每份副本均具有同等法律效力。<span
          class="fb"
          style="font-weight:bold;"
          >本服务平台对您提供的身份证件信息进行验证并生成了与您的账户对应之唯一登录信息（包括但不限于绑定邮箱、昵称、ID等，以公司不时要求为准）、您设置了对应的登录密码后，任何人通过您的账户之登录信息和登录密码登录进入您的账户后，在本服务平台或通过本服务平台的信息传递服务（无论是您直接操作、指令，还是您委托公司代理您进行操作、指令）而签署的法律文件、发出的指令、进行的操作，均视为您本人的真实意思表示和您本人的行为，一经成立生效即不可撤销，且对您具有法律约束力并产生强制执行效力。</span
        >
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">6.2</span
        >&nbsp;您根据本协议以及相关的使用规则以电子方式在本服务平台上或通过本服务平台跳转至合作机构之网站、网页界面签署相应法律文件后，非经法定或约定的方式和程序，对应的法律文件不得擅自修改。公司向您提供该等法律文件的保管、查询、核对等服务，如您对该等法律文件的真伪或内容有任何疑问，您可通过本服务平台的相关系统板块查阅并进行核对。如您经查询仍对法律文件的真伪、版本有任何争议，应以本服务平台和/或相关合作机构或其委托第三方的服务器记录为准。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">6.3</span>&nbsp;<span
          class="fb"
          style="font-weight:bold;"
          >您同意本协议及在本服务平台上签署的相应法律文件均由公司在其或其分支机构、或其委托的第三方的服务器上以电子形式保存，该等服务器所在地为北京市朝阳区。您同意通过本服务平台跳转至合作机构之网站、网页界面签署的相应法律文件均根据交易文件约定方式以电子形式保存。</span
        >
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        七、 用户信息及隐私保护
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">7.1</span>&nbsp;用户信息的提供、搜集及核实
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j3">7.1.1</span
        ><span class="fb" style="font-weight:bold;"
          >您承诺并保证在注册时如实填写自己的个人资料和信息，并保证及时更新您的个人信息，以确保诸如个人身份信息、电子邮件地址、联系电话（含手机号码，下同）、地址信息、邮政编码等个人资料的有效性、安全性和及时更新。如果公司无法根据您提供的联系方式与您取得联系，由此导致您在使用本服务平台服务过程中遭受任何损失或增加任何费用或产生其他任何不利后果的，均应由您自行承担。</span
        >
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j3" style="font-weight:300;">7.1.2</span
        >除了您自主填写和提供的个人信息和资料，您同意并授权公司可以自行或通过其他机构（包括但不限于征信机构、行业协会及其他第三方机构，下同）依法收集您的额外资料和信息，以实现公司在本协议项下提供的各项服务，搜集的资料和信息范围包括但不限于：
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j3" style="font-weight:300;">（1）</span
        >您的其他个人信息，包括但不限于证件类型、工作信息、学历信息、个人生物识别信息以及能够单独或者与其他信息结合识别您个人身份的其他信息；
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j3" style="font-weight:300;">（2）</span
        >您在公司的关联方和合作伙伴或其他第三方机构及其运营的网络平台上留存以及形成的任何数据和信息，包括但不限于您的证券账户和/或银行账户信息、您在公司、公司的关联方或公司及关联方之合作伙伴的网络平台上留存、形成的任何数据和信息，包括但不限于您的交易记录、金融理财产品账户信息、投融资项目信息、履约或违约行为信息以及其他任何个人信息或行为数据；
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j3" style="font-weight:300;">（3）</span
        >您的信用信息，包括但不限于您的征信信息、征信记录和信用报告；
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j3" style="font-weight:300;">（4）</span
        >您的财产信息，包括但不限于您的店铺/企业经营状况、收入情况、财税信息、社会保险及公积金信息、房产信息、车辆信息、基金、保险、股票、信托、债券等投资理财信息和负债信息等；
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j3" style="font-weight:300;">（5）</span
        >您在行政机关、司法机关留存的任何信息，包括但不限于户籍信息、工商信息、诉讼信息、执行信息和违法犯罪信息等；
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j3" style="font-weight:300;">（6）</span
        >与您申请或使用的与公司服务相关的、您留存在其他自然人、法人和组织的其他相关信息。
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j3" style="font-weight:300;">7.1.3</span
        >本协议提及之用户“信息和资料”包括第6.1.1和第6.1.2条规定指资料和信息。您同意公司可以自行或通过合作机构对您提交或公司搜集的用户信息（包括但不限于您的个人身份证信息等）进行核实，并对获得的核实结果进行查看、使用和留存等操作。
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j3" style="font-weight:300;">7.1.4</span
        >您同意公司有权按照您在本服务平台上的行为自动追踪您的资料和信息。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j3">7.1.5</span
        >您同意公司有权通过本服务平台使用诸如“Cookies”等装置以搜集、追踪相关信息和资料并提供只有通过
        “Cookies”等装置才可得到的功能。
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j3" style="font-weight:300;">7.1.6</span
        >您同意当您使用本服务平台过程中，公司通过本服务平台向您明示并经您确认同意后，公司有权通过本服务平台向您开启收集地理位置、读取通讯录、读取短信、使用摄像头、启用录音等功能。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j3">7.1.7</span
        >您同意公司有权将您提交的个人信息和资料、公司搜集的关于您的信息和资料以及您使用本服务平台服务的记录、信息进行搜集、保存。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">7.2</span>&nbsp;用户信息的使用和披露
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="fb" style="font-weight:bold;"
          >公司承诺对您的个人信息和资料（包括您主动提交的和公司搜集、记录的所有数据、信息、资料和相应的交易行为记录、交易文件，下同）承担保密义务，不将您的信息向第三方进行出租或出售，并采取必要的措施防止用户个人信息泄露、毁损、篡改或者丢失；但您在此同意并授权，公司可以直接将您的个人信息和资料用于如下用途而无需额外取得您的同意和/或授权：</span
        >
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j3">7.2.1</span
        >&nbsp;向您的交易方或向您提供服务的合作机构提供。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j3">7.2.2</span
        >&nbsp;进行用户身份识别、资料核查和验证，以确保在本服务平台或通过本服务平台进行的交易的安全性和防范违法犯罪活动。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j3">7.2.3</span
        >&nbsp;进行内部归类、模型建设和分析等内部使用，以改进本服务平台对您及其他用户提供的服务。
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j3" style="font-weight:300;">7.2.4</span
        >&nbsp;向您推荐公司提供的商品、服务或推广活动，以及与公司的关联方、合作方共享，以向您提供或推荐公司的关联方、合作方的商品、服务或推广活动。您不可撤销地同意公司、公司的关联方及合作方通过站内信、电子邮件、电话、短信等方式向您提供、发送服务状态的通知、营销活动及其他商业性信息。
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j3" style="font-weight:300;">7.2.5</span
        >&nbsp;公司根据您的授权提交有关操作指令，在您拟通过合作机构进行交易时，将您必要的个人信息和资料（包括但不限于真实姓名、联系方式、信用状况等）披露给合作机构及其用户（如有）；当您违反本协议、各使用规则和/或您与公司签署的和/或通过公司与合作机构及其用户签署的法律文件（包括借款交易文件）之约定或任何法律法规规定时，公司有权因你的违约、违法行为或根据交易方、合作机构的通知，披露您的个人信息和资料以及您的违法、违约行为和对应的交易文件而无需承担任何责任，披露的方式包括但不限于：①在本服务平台公共页面、其他合作机构网站公布；②向与您交易的主体以及有权的仲裁机构和司法、行政等权力机关提供；③向受公司、合作机构及其用户或与您交易之出借人委托的专业法律顾问、催收机构等服务机构提供；④其他披露方式。
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j3" style="font-weight:300;">7.2.6</span
        >&nbsp;根据有关法律法规要求向有权的仲裁机构或司法、行政、立法等权力机关提供您的个人资料和信息。
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j3" style="font-weight:300;">7.2.7</span
        >&nbsp;提供给依法设立的征信机构和个人信用数据库，以供有关单位和个人依法查询和使用。
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j3" style="font-weight:300;">7.2.8</span
        >&nbsp;提供给公司的关联方、合作方（包括但不限于合作机构，下同）以用于完成公司对您提供的服务（包括但不限于对您的个人资料和信息进行核实、对您的信用情况进行评估等）。
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j3" style="font-weight:300;">7.2.9</span
        >&nbsp;基于服务用户之目的，在公司的关联方、合作方同意承担保密义务的情况下，与公司的关联方、合作方共享您的个人资料和信息，以便关联方、合作方向您展示公司提供的商品、服务或推广活动。
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j3" style="font-weight:300;">7.2.10</span
        >&nbsp;当您使用或申请使用公司的关联方、合作方提供的服务或与其或拟与其进行交易时，将您的个人信息和资料共享予该等公司关联方、合作方，使其可以对您的个人信息和资料。
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j3" style="font-weight:300;">7.2.11</span
        >&nbsp;您授权的其他情形。
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j2" style="font-weight:500;">7.3</span
        >&nbsp;您清楚知晓、充分理解并接受上述信息被提供、采集和使用可能产生的不利后果，包括但不限于：将上述信息应用于对您本人的信用评估和/或出具信用报告后，可能导致本人在向其他机构申请某项业务时，提供该等业务的机构因参考上述信用评估和/或出具的信用报告而最终拒绝或终止向您本人提供该等业务，以及虽然采取了严格的安全保护措施对所采集的上述信息实施了安全保护，但仍可能因不可抗力或高科技本身所不可克服的漏洞或意外的恶意黑客攻击所导致的部分信息泄露的风险。
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        八、 风险提示及责任限制
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j2" style="font-weight:500;">8.1</span
        >&nbsp;您使用本服务平台服务、通过本服务平台进行交易，存在如下风险：
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j3" style="font-weight:300;">8.1.1</span
        >您的借款需求无法通过公司的评审和推荐服务得到满足的风险；
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j3" style="font-weight:300;">8.1.2</span
        >因为①网络服务运营商、网站设备供应商等外部第三方的故意或过失，②技术限制带来的系统或设备缺陷，③本服务平台系统或相关网站维护，④法律法规变化、黑客攻击、网络故障、电力中断、计算机病毒或其他不可抗力因素，而引起的交易中断和/或交易错误的风险；
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j3" style="font-weight:300;">8.1.3</span
        >您账户的登录信息、登录密码被窃取或泄露而导致您个人财产损失的风险；
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j3" style="font-weight:300;">8.1.4</span
        >您的个人信息和资料被不法分子窃取、泄露的风险以及由此带来的您个人隐私、生活受到干扰、侵犯的风险；
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j3" style="font-weight:300;">8.1.5</span>其他风险。
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j2" style="font-weight:500;">8.2</span>&nbsp;责任限制
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j3" style="font-weight:300;">8.2.1</span
        >&nbsp;在任何情况下，非因公司的原因导致的您在使用本服务平台服务过程中遭受的损失（损失原因包括但不限于您的操作失误导致的损失、第三方机构导致的损失、交易对手违约导致的损失，您本人使用的电脑、手机终端设备感染病毒或安全防御系统被突破造成您无法正常使用本服务平台服务或账户、个人信息泄露而导致的损失，损失类型包括但不限于本息损失），均应由您自行承担或解决；此外，您理解公司基于技术限制和要求需要不时地对本服务平台系统或相关网站进行升级或维护并可能需要中断对您的服务，公司对由此导致的后果不承担责任。
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j3" style="font-weight:300;">8.2.2</span
        >&nbsp;公司及其股东、创建人、高级职员、董事、代理人、关联方和雇员（以下称“公司方”）均不以任何明示或默示的方式对您在前述情形下的直接或间接损失承担法律责任，包括但不限于资金损失、预期收益的损失、营业中断损失等。您应当仔细阅读本协议、各项使用规则、交易的相关法律文件，明确知悉并理解存在的风险，并在独立判断后作出交易决策。
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j3" style="font-weight:300;">8.2.3</span
        >&nbsp;公司不能保证在本服务平台和/或在合作机构及其交易平台（如有）上交易各方展示的信息内容的真实性、充分性、可靠性、准确性、完整性和有效性，并且不承担任何由此引起的法律责任，除非该等信息的不真实、不充分、不准确、不完整、无效最终被有权的仲裁机构、司法机关或行政机关生效的裁定、判决、裁决或命令认定为是因公司的故意或过失所导致且公司因此应当承担相应的法律责任。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j3">8.2.4</span
        >&nbsp;您有义务选择/使用公司官方开发的本服务平台软件系统，任何通过其他网站链接、邮件链接或其他方式登录非官方平台并由此造成的风险和损失由您自行承担。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j3">8.2.5</span
        >&nbsp;公司不能保证也没有义务保证与本服务平台链接或者您自行登录的第三方网站上的信息的真实性和有效性，您应当自行对第三方网站提供的信息、服务、产品进行判断并谨慎作出决策，公司对第三方网站提供的信息、服务、产品均不承担任何责任。
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        九、 账户的管理和使用
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">9.1</span
        >&nbsp;您在接受本协议并通过本服务平台软件注册成为用户后，将取得对应之唯一账户（统称为
        “账户”）。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">9.2</span
        >&nbsp;您可自行为您的账户设置密码，并通过该账户登录本服务平台进行相关操作来接受公司提供的各项服务；本服务平台将通过您的账户登录信息和密码识别您的指示。在任何情况下，您应直接通过本服务平台以登录您的账户，而不要通过邮件或其他网站提供的链接登录；您以电话方式传递任何信息时应拨打公司专属客户服务电话：<span>【4000856608】</span>（如公司以公告等形式发布新的客服电话，请届时拨打新的客服电话），而不要拨打其他任何电话。<span
          class="fb"
          style="font-weight:bold;"
          >您应妥善保管您的账户登录信息和密码，除您有效授权的代理人外，您不得以借用、租用或其他任何方式提供给第三方使用。公司在此郑重提醒您，无论是您还是您的代理人或其他第三方（包括但不限于您的用户名、密码泄露导致），以您的账户名和密码登录本服务平台后的一切行为和言论均视为您本人的行为，并应由您承担相应的法律后果。</span
        >
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">9.3</span>&nbsp;<span
          class="fb"
          style="font-weight:bold;"
          >请您务必妥善保管您的账户登录信息和密码，防止泄露或被不法分子窃取。您若发现您的账户和密码被盗用，应立即以有效方式通知公司，要求公司对您的账户暂停相关服务，否则由此产生的一切责任均由您本人承担。</span
        >同时，您理解公司对您的请求采取行动需要合理期限，在此之前，公司对第三人使用该服务所导致的您的损失不承担任何直接或间接的赔偿、担保以及其他责任。
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j2" style="font-weight:500;">9.4</span>&nbsp;账户使用限制
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j3">9.4.1</span
        >&nbsp;您承诺合法使用本服务平台提供的服务及内容，不得利用公司服务和本服务平台从事任何违反或可能违反所有适用法律、法规、政府规章和命令（包括但不限于中国的法律、法规、政府规章和命令）的行为，亦不得利用公司服务和本服务平台从事任何侵犯或可能侵犯其他主体任何权利、权益的行为。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j3">9.4.2</span
        >&nbsp;构成本服务平台软件的全部内容均属于公司所有，该等内容包括但不限于文本、数据、文章、设计、源代码、软件、图片、照片及其他全部信息（以下称“本服务平台内容”），且您同意并承诺、确认该等本服务平台内容为公司之财产。未经公司事先书面同意，您不得以任何方式和形式复制、模仿、传播、出版、公布、展示、使用前述内容，包括但不限于电子的、机械的、复印的、录音录像的方式和形式等，您亦不得将任何本服务平台内容镜像到任何其他网站或者服务器。任何未经授权对本服务平台内容的使用均属于违法行为，公司将追究您的法律责任。
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j3" style="font-weight:300;">9.4.3</span
        >&nbsp;公司有义务根据有权的仲裁机构、司法机关、行政机关或其他政府机构的有效的法律文书、裁决、命令，不经事先通知而先行对您的账户采取包括但不限于冻结、锁定、注销、划扣、处置您委托您的交易服务商管理的资金（如有）的措施以及其他措施，和/或暂停、中断或终止向您提供本协议项下的全部或部分服务。
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j3" style="font-weight:300;">9.4.4</span
        >&nbsp;公司有权基于单方独立判断，在认为发生或可能发生危害交易安全、破坏公平交易秩序、损害其他主体的权益等情形时，不经通知而采取包括但不限于：先行暂停、中断向您提供本协议项下的全部或部分服务，以及/或者将您在本服务平台发表的内容和/或您的个人资料和信息移除或删除，以及/或者处置您委托公司或通过公司委托您的交易服务商管理的资金等资产（如有）等措施，且无需对您或任何第三方承担任何责任。前述情形包括但不限于：
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j3" style="font-weight:300;">（1）</span
        >&nbsp;公司认为您提供的个人资料不具有真实性、有效性或完整性；
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j3" style="font-weight:300;">（2）</span
        >&nbsp;公司发现您的账户存在异常交易或认为您的账户存在异常交易的可能时；
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j3" style="font-weight:300;">（3）</span
        >&nbsp;公司认为您的账户涉嫌洗钱、信用卡套现、传销等违法违规行为，或认为您的账户存在被冒用或其他公司认为可能损害您或者其他用户的合法权益的情形；
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j3" style="font-weight:300;">（4）</span
        >&nbsp;公司认为您已经违反或可能违反本协议各项规定时；
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j3" style="font-weight:300;">（5）</span
        >公司不时公告的其他各项情形。
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j2" style="font-weight:500;">9.5</span
        >&nbsp;服务终止和账户的关闭、注销
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j3" style="font-weight:300;">9.5.1</span
        >&nbsp;您同意：根据有权的仲裁机构、司法机关、行政机关或其他政府机构的有效的法律文书、裁决、命令，或者发生第9.4.4条规定的各项情形时，公司有权无需进行事先通知即终止提供本协议项下的各项服务，并关闭、注销您的账户、删除该账户中的所有相关资料及档案
        或 进行去识别 化
        处理，同时将您滞留于您的账户的全部合法资金（如有）退回到您的银行账户或者根据权力机关的要求进行其他处置。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j3">9.5.2</span
        >&nbsp;如果您决定不再使用您的账户时，应首先清偿在通过公司的服务而达成之借款交易项下所有应付款项（包括但不限于借款本金、利息、罚息、违约金、服务费、管理费等），并按照本协议、使用规则以及您与公司、交易服务商、第三方机构另行签署的关于账户管理与使用的有效法律文件，通过您的账户向公司、交易服务商、第三方机构发出有效的资金支付指令，将您在该账户中记载的由公司或交易服务商管理的可用款项（如有）全部转移至您的银行账户，再向公司申请注销该用户账户。经公司审核同意后，您可正式注销您的账户。您的账户注销，并不必然导致您在合作机构及其网络平台（如有）上的账户注销，您在合作机构及其网络平台账户的关闭和注销，应当遵守其《注册服务协议》及相关服务规则进行操作。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j3">9.5.3</span
        >&nbsp;如果用户死亡或被宣告死亡的，其在本协议项下以及有关借款交易协议项下的各项权利义务由其合法的继承人享有和承担。若用户丧失全部或部分民事权利能力或民事行为能力的，公司有权根据有效法律文书（包括但不限于生效的法院判决等）或其法定监护人的指示处置其账户及该等账户内的款项（如有），该等用户在本协议以及有关借款交易协议项下的权利义务依据法律法规规定处理。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j3">9.5.4</span
        >&nbsp;您应保证您注册账户时使用的第三方网站账户、手机号码为您个人合法所有；如果您因为该等第三方网站账户、手机号码失效、注销、更换导致您无法正常使用账户的，公司对此不承担任何责任。
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j3" style="font-weight:300;">9.5.5</span
        >&nbsp;如果公司、为您提供资金管理服务的交易服务商、第三方支付机构或金融机构在前述第9.5.1条至9.5.4条规定情况下另有要求的，以其要求为准。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">9.6</span
        >&nbsp;您同意并确认：您的账户的暂停、中断或终止不代表您责任的终止，您仍应继续履行您使用本服务平台服务期间所签署之各项法律文件（包括但不限于本协议、对应的借款交易协议）项下未履行完毕之义务，并对您使用本服务平台服务期间的行为承担可能的违约或损害赔偿责任；此外，在该等情况下，公司仍可保存您的个人信息和资料并根据本协议规定予以使用和披露。
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        十、 通知
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="fb" style="font-weight:bold;"
          >对于本协议项下的各项通知，公司有权以在本服务平台公示的方式发送，也可以向您的账户、您提供的您的电子邮箱和手机号码发送信息、通过系统推送、发送站内信的方式发送，还可以拨打您预留的电话号码的方式发送，以及向您预留的住址以快递、挂号信的方式发送。如以公示方式作出的，在本服务平台公示当日即视为已经送达；向您的账户、您的电子邮箱或手机号码以电子信息形式发送的，一经成功发送即视为已经送达；以电话形式发送的，通知作出之时即为送达；以快递、挂号信的方式发送的，投递之日起第三日视为送达。</span
        ><span
          >请您密切关注您的电子邮箱
          、站内消息系统栏中的邮件、信息及手机中的信息，并在您的联系方式发生变更时及时通过操作本服务平台相关板块进行更新。</span
        ><span class="fb" style="font-weight:bold;"
          >您同时同意并确认，若您设置了不接收本服务平台的有关通知或提醒，则您有可能收不到该等通知信息，您不得以您未收到或未阅读该等通知信息主张相关通知未送达于您。</span
        >
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        十一、 适用法律和管辖
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        因本协议的签署、履行产生的争议均适用中华人民共和国法律，并应由本协议签署地有管辖权的人民法院管辖。本协议签署地为本协议第6.3条提及之服务器所在地北京市朝阳区。
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        十二、 其他
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        若本协议的部分条款被认定为无效或者无法实施时，本协议中的其他条款仍然有效并应继续予以履行。
      </p>
    </div>
    <div class="deal-page" v-show="dealType === 2">
      <h3
        class="tc"
        style='font-size:15px;text-align:center;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        好分期隐私权政策
      </h3>
      <p
        class="tc"
        style='font-size:15px;text-align:center;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        最后更新时间：2018年【06】月【21】日
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        好分期非常重视用户个人信息和隐私权的保护，鉴于此，我们根据相关法律法规规定，制定本隐私权政策，帮助您了解我们将如何收集、使用并保护您的个人信息。本隐私权政策适用于我们提供的产品或服务，请您在使用我们的产品或服务前认真阅读并确认充分理解本隐私权政策，以便您做出您认为适当的选择。<span
          class="fb"
          style="font-weight:bold;"
          >您使用我们提供的产品或服务，</span
        >即意味着您已阅读本隐私权政策所有条款，并对本隐私权政策条款的含义及相应的法律后果已全部通晓并充分理解，<span
          class="fb"
          style="font-weight:bold;"
          >并且同意我们按照本隐私权政策收集、使用并保护您的个人信息。如果您不同意本隐私权政策的部分或全部内容、或对本隐私权政策内容有任何疑问，您应立即停止使用我们提供的产品或服务，并通过好分期客服与我们联系。</span
        >
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        本隐私权政策已对与您的权益具有或可能具有重大关系的条款，及对我们具有或可能具有免责或限制责任的条款用粗体字予以标注，请您注意。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        需要特别说明的是，好分期平台也可能含有到其他网站的链接，我们对该等链接网站的信息保护措施不负责任。我们建议您查看该等网站的隐私权政策，以了解他们如何处理您的信息，以便审慎决策。
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        本隐私权政策将帮助您了解以下内容：
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        一. 我们如何收集和使用您的个人信息
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        二. 我们如何共享、转让、公开披露您的个人信息
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        三. 我们如何保存您的个人信息
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        四. 我们如何保护您的个人信息
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        五. 您可以如何管理个人信息
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        六. 未成年人的个人信息保护
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        七. 通知和修订
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        八. 您如何联系我们
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        九. 可分割性
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        十. 其他
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        一.&nbsp;<span class="tu">我们如何收集和使用您的个人信息</span>
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        个人信息是指以电子或者其他方式记录的能够单独或者与其他信息结合识别特定自然人身份或者反映特定自然人活动情况的各种信息。我们将在如下流程中，基于实现该流程所需的目的收集您的个人信息：
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">1.1</span>&nbsp;&nbsp;&nbsp;
        当您注册好分期账号时，我们将收集您的真实姓名、手机号码、身份证件号码、电子邮箱、登录密码、手势密码或面部特征等个人生物识别信息，收集此类信息是为了满足相关法律法规的网络实名制要求并保护您的账号安全。如果您仅需使用基础浏览服务，您可以选择不进行注册及提供上述信息。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">1.2</span>&nbsp;&nbsp;&nbsp;
        当您希望通过我们提供的产品或服务获得互联网借贷交易信用咨询及管理服务、信用卡分期还款咨询服务、商品交易消费分期咨询服务时，我们将收集您的如下个人信息：
      </p>
      <p
        class="t2"
        style='font-size:15px;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        i
        您的真实姓名、身份证件号码、性别、手机号码、电子邮箱、婚姻状态、年龄、学历、户口所在地、现居住地（如居住地证明）、工作情况（如工作证明）、收入情况（如个人银行流水）、征信报告和其他财产证明（如房产、车产等）；
      </p>
      <p
        class="t2"
        style='font-size:15px;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        ii
        您的订单信息（如收货人、收货地址、收货人手机号码，订单金额、支付方式等）；您的浏览信息（我们可能进行数据分析并形成用户画像后向您展示您可能感兴趣的商品）；以及您的位置信息（用于向您推荐您所在区域可以选购的商品、预估配送时间等）；
      </p>
      <p
        class="fb t2"
        style='font-size:15px;font-weight:bold;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        iii
        您的社保、公积金信息，芝麻信用报告，在此信息收集过程中可能需要您提供有关账户名、密码和短信验证码；
      </p>
      <p
        class="t2"
        style='font-size:15px;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        iv
        借款项目名称、借款金额、借款期限、借款用途、还款方式、还款来源、还款保障措施；
      </p>
      <p
        class="t2"
        style='font-size:15px;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        v
        借款资金运用情况，您的经营状况及财务状况、还款能力变化情况，您的借款逾期情况，以及您的涉诉情况、受行政处罚情况；
      </p>
      <p
        class="t2"
        style='font-size:15px;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        vi
        您的通讯录、通话详单，您的亲戚朋友、联系人及其手机号码，请您确保您在向我们提供该信息时已经获得您的亲戚朋友、联系人的同意，以便我们、我们的关联方或合作方可以通过您提供的联系方式进行联系。如您向我们提供的亲戚朋友、联系人及其手机号码的行为未经过其本人同意，我们与您的亲戚朋友、联系人进行联系所发生的风险及责任将由您承担。<span
          class="fb"
          style="font-weight:bold;"
          >当您违反与好分期的约定时，为维护好分期的合法权益，您同意好分期可向与好分期合作的律师事务所、催收机构，及好分期认为可向您传达信息的亲戚朋友、联系人等披露您的违约信息；若好分期与您的亲戚朋友、联系人等关联方存在纠纷未能协商解决的，好分期可能会自行或通过催收机构、律师事务所、法院、仲裁委员会和其他有权机关与您联系，请您帮助好分期或上述机构向您的亲戚朋友、联系人等关联方转达相关诉求，上述转达以您自愿为基础，并不会让您承担额外的法律义务或责任；</span
        >以及
      </p>
      <p
        class="t2"
        style='font-size:15px;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        vii
        为实现本隐私权政策目的所需的、或者本隐私权政策或其他协议中经您授权许可的其他收集方式下所收集的信息。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        收集此类信息是为了完成借款人身份识别、信用审核和/或逾期账务提醒以及为您提供商品选购服务等，如果您不提供此类信息，您可能无法正常使用我们的服务。
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j2" style="font-weight:normal;">1.3</span
        >&nbsp;&nbsp;&nbsp;
        为更好地向您提供产品和服务，也为了我们自身的风险防控，以及保护各方的合法权益，您同意并授权我们可以通过您自主填写和提供的个人信息和资料自行或通过其他机构（包括但不限于征信机构、行业协会及其他第三方机构，下同）依法收集您的额外资料和信息，以在您使用我们提供的产品或服务前期对您的履约情况、信用情况进行审核、在后期对您进行必要的催收、以及实现我们为您提供的各项服务，我们搜集的资料和信息范围包括但不限于：
      </p>
      <p
        class="t2"
        style='font-size:15px;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        i
        您的其他个人信息，包括但不限于工作信息、学历信息以及能够单独或者与其他信息结合识别您个人身份的其他信息；
      </p>
      <p
        class="fb t2"
        style='font-size:15px;font-weight:bold;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        ii
        您在我们的关联方和合作方处留存以及形成的任何数据和信息，包括但不限于您的证券账户和/或银行账户信息等；您在我们、我们的关联方或合作方以及其他机构的网络平台上留存、形成、产生的有关法律文件以及任何个人信息或行为数据，包括但不限于您的交易信息、账户信息、借贷项目信息、履约或违约行为信息等；
      </p>
      <p
        class="fb t2"
        style='font-size:15px;font-weight:bold;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        iii 您的信用信息，包括但不限于您的征信记录和信用报告及其他信用信息；
      </p>
      <p
        class="fb t2"
        style='font-size:15px;font-weight:bold;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        iv
        您的财产信息，包括但不限于您的店铺/企业经营状况、财税信息、房产信息、车辆信息、基金、保险、股票、信托、债券等投资理财信息和负债信息等；
      </p>
      <p
        class="fb t2"
        style='font-size:15px;font-weight:bold;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        v
        您在行政机关、司法机关留存的任何信息，包括但不限于户籍信息、工商信息、诉讼信息、执行信息和违法犯罪信息等；以及
      </p>
      <p
        class="fb t2"
        style='font-size:15px;font-weight:bold;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        vi
        与您申请或使用的产品或服务相关的、您留存在其他自然人、法人和组织的其他相关信息。
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j2" style="font-weight:normal;">1.4</span
        >&nbsp;&nbsp;&nbsp;
        您同意我们可以自行或通过合作方（包括但不限于合作机构、行业协会）对您提交或我们搜集的用户信息（包括但不限于您的个人身份证信息等）进行核实、验证，并对获得的核实、验证结果进行查看、收集、使用和留存等操作。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">1.5</span>&nbsp;&nbsp;&nbsp;
        我们将在您使用我们提供的产品或服务的过程中收集您的个人常用设备信息（包括设备名称、设备型号、设备识别码、操作系统和应用程序版本）和日志信息（如访问内容、IP地址、访问日期和时间及访问记录等），收集这些信息是为了向您提供更好的产品和/或服务并改善用户体验。
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j2" style="font-weight:normal;">1.6</span
        >&nbsp;&nbsp;&nbsp;
        您在此同意并授权，我们可以直接将您的个人信息和资料用于如下用途：
      </p>
      <p
        class="fb t2"
        style='font-size:15px;font-weight:bold;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        i
        进行用户身份识别、资料核查和验证，以审核用户的履约情况、信用情况，确保交易的合理性、安全性和防范违法犯罪活动；
      </p>
      <p
        class="fb t2"
        style='font-size:15px;font-weight:bold;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        ii
        为向您提供适合于您的服务，并持续维护、改善、优化该等服务，对您的信息进行内部归类、模型建设和分析等内部使用；
      </p>
      <p
        class="fb t2"
        style='font-size:15px;font-weight:bold;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        iii
        用于预防、发现、调查欺诈、危害安全、非法或违反与我们或我们关联方协议、政策或规则的行为，以保护您、我们的其他用户、我们或我们关联方的合法权益；
      </p>
      <p
        class="fb t2"
        style='font-size:15px;font-weight:bold;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        iv
        我们可能会将来自某项服务的信息与来自其他服务的信息结合起来，以便为您提供更优质、个性化的服务、内容和建议；
      </p>
      <p
        class="fb t2"
        style='font-size:15px;font-weight:bold;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        v 用于向您收取应支付的各类费用（如有）；
      </p>
      <p
        class="fb t2"
        style='font-size:15px;font-weight:bold;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        vi
        向我们的合作方提供您的订单信息、支付信息以及配送信息，以便确认您的支付指令完成支付，并向您安排送货；向第三方提供必要的订单信息以实现您购买商品的需求，以便其为您提供相关售后服务；
      </p>
      <p
        class="fb t2"
        style='font-size:15px;font-weight:bold;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        vii
        有针对性地向您推荐我们提供的商品、服务或推广活动，以及与我们的关联方、合作方共享，以向您提供或推荐我们的关联方、合作方的商品、服务或推广活动。您同意我们、我们的关联方及合作方通过站内信、电子邮件、电话、短信等方式向您提供、发送服务状态的通知、营销活动及其他商业性信息。如不需要我们推广相关信息，您可联系好分期客服取消、退订该类信息推广服务；以及
      </p>
      <p
        class="fb t2"
        style='font-size:15px;font-weight:bold;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        viii
        为实现本隐私权政策目的所需的、或者本隐私权政策或其他协议中经您授权许可的其他使用方式。
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j2" style="font-weight:normal;">1.7</span
        >&nbsp;&nbsp;&nbsp;
        您充分知晓，以下情形中，我们收集、使用个人信息无需征得您的授权或同意：
      </p>
      <p
        class="t2"
        style='font-size:15px;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        i 与国家安全、国防安全有关；
      </p>
      <p
        class="t2"
        style='font-size:15px;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        ii 与公共安全、公共卫生、重大公共利益有关；
      </p>
      <p
        class="t2"
        style='font-size:15px;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        iii 与犯罪侦查、起诉、审判和判决执行等有关；
      </p>
      <p
        class="t2"
        style='font-size:15px;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        iv
        出于维护个人信息主体或其他个人的生命、财产等重大合法权益但又很难得到本人同意的；
      </p>
      <p
        class="t2"
        style='font-size:15px;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        v 所收集的个人信息是个人信息主体自行向社会公众公开的；
      </p>
      <p
        class="t2"
        style='font-size:15px;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        vi
        从合法公开披露的信息中收集的您的个人信息，如合法的新闻报道、政府信息公开等渠道；
      </p>
      <p
        class="t2"
        style='font-size:15px;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        vii 根据您的要求签订合同所必需的；
      </p>
      <p
        class="t2"
        style='font-size:15px;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        viii
        用于维护所提供的产品与/或服务的安全稳定运行所必需，例如发现、处置产品与/或服务的故障；
      </p>
      <p
        class="t2"
        style='font-size:15px;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        ix 为合法的新闻报道所必需；
      </p>
      <p
        class="t2"
        style='font-size:15px;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        x
        学术研究机构基于公共利益开展统计或学术研究所必要，且对外提供学术研究或描述的结果时，对结果中所包含的个人信息进行匿名化处理的；以及
      </p>
      <p
        class="t2"
        style='font-size:15px;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        xi 法律法规规定的其他情形。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">1.8</span>&nbsp;&nbsp;&nbsp;
        您知晓并同意，在收集您的个人信息后，我们可能会通过技术手段对您的个人信息进行脱敏。<span
          class="fb"
          style="font-weight:bold;"
          >我们有权在不透露您个人信息的前提下使用已经脱敏的信息。</span
        >
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">1.9</span>&nbsp;&nbsp;&nbsp;
        为了了解您的偏好、进行咨询或数据分析、改善产品服务及用户体验、提高广告效果、及时发现并防范安全风险、为用户和合作方提供更好的服务，您同意我们有权使用诸如“Cookie”等装置以搜集、追踪相关信息和资料并提供只有通过“Cookie”等装置才可得到的功能。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">1.10</span>&nbsp;&nbsp;&nbsp;
        我们不会将“Cookie”用于本隐私权政策所述目的之外的任何用途，您可根据自己的偏好留存或删除“Cookie”。
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        二.&nbsp;<span class="tu"
          >我们如何共享、转让、公开披露您的个人信息</span
        >
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">2.1</span>&nbsp;&nbsp;&nbsp;
        我们承诺会根据相关法律法规及监管规定对您的个人信息（包括您主动提供的和我们收集、记录的所有数据、信息、资料和相应的交易行为记录、交易文件，下同）承担保密义务。但为了向您提供更多元化、个性化、优质的服务，您同意并授权我们在以下情形下将您的信息向第三方进行共享。并且，我们将促使该等第三方在使用您信息的过程中对您的信息采取适当保密与安全措施：
      </p>
      <p
        class="t2"
        style='font-size:15px;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        i 事先获得您的明确同意或授权；
      </p>
      <p
        class="t2"
        style='font-size:15px;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        ii
        根据可适用的法律法规、法律程序的要求、强制性的行政或司法要求所必须的情况下进行提供；
      </p>
      <p
        class="t2"
        style='font-size:15px;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        iii
        提供给依法设立的征信机构和个人信用数据机构，以供有关单位和个人依法查询和使用；
      </p>
      <p
        class="t2"
        style='font-size:15px;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        iv
        提供给合法成立的行业协会，以供有关单位和个人依法查询和使用，并按照行业协会的要求依法进行信息披露和展示；
      </p>
      <p
        class="t2"
        style='font-size:15px;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        v
        在法律法规允许的范围内，为维护我们、我们的关联方或合作方，您或其他用户，或社会公众利益、财产或安全免遭损害而有必要提供；
      </p>
      <p
        class="t2"
        style='font-size:15px;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        vi
        提供给我们的关联方、合作方以用于现在或将来向您提供我们、我们的关联方、合作方的相关服务，具体的服务可能包括借贷服务、理财服务等，您在此确认前述服务是您希望获得的（包括但不限于对您的个人资料和信息进行核实、对您的信用情况进行评估以决定向您提供前述服务的可行性、合理性以及决定提供服务的相关条款和条件等）；
      </p>
      <p
        class="t2"
        style='font-size:15px;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        vii
        符合我们、我们的关联方、合作方与您签署的相关协议（包括在线签署的电子协议以及相应的平台规则）或其他的法律文件约定所提供；
      </p>
      <p
        class="t2"
        style='font-size:15px;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        viii
        如我们或我们的关联方涉及合并、分立、收购、资产或业务转让或类似的交易，您的个人信息可能作为此类交易的一部分而被共享，我们将确保该等信息在共享时的机密性，您同意对此予以认可和理解；
      </p>
      <p
        class="t2"
        style='font-size:15px;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        ix 基于学术研究而使用；
      </p>
      <p
        class="t2"
        style='font-size:15px;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        x 基于符合法律法规的社会公共利益而使用；以及
      </p>
      <p
        class="t2"
        style='font-size:15px;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        xi
        为实现本隐私权政策目的所需的、或者本隐私权政策或其他协议中经您授权许可的其他共享方式。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">2.2</span>&nbsp;&nbsp;&nbsp;
        基于服务用户之目的，在我们的关联方、<a name="_Hlk497680032"></a
        >合作方同意承担保密义务的情况下，我们可能会与我们的关联方、合作方共享您的个人资料和信息，以便我们的关联方、合作方向您展示我们提供的商品、服务或推广活动。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">2.3</span>&nbsp;&nbsp;&nbsp;
        当您使用或申请使用我们的关联方、合作方提供的服务或与其或拟与其进行交易时，我们可能会将您的个人信息和资料共享与该等关联方、合作方，使其可以对您的个人信息和资料进行核实、分析。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">2.4</span>&nbsp;&nbsp;&nbsp; 您对其他用户信息的使用：
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        在不违反我们与其他用户、合作机构之间的协议的前提下，发生如下任一情形时，您有权要求我们提供与您发生交易的其他用户、合作机构的信息和资料，且我们提供的该等信息和资料仅以在如下情形发生时使用并以维护您的合法权益所必须为限：
      </p>
      <ol style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <li>
          与您交易的其他用户、合作机构发生了与您签署的法律文件项下的违约行为；
        </li>
        <li>
          您已依法对与您交易的其他用户提起了有关您与该其他用户通过公司的服务进行的交易有关的仲裁或诉讼并提供了有效的立案（受理）证明文件；或
        </li>
        <li>
          发生了有碍您在通过我们的产品进行的交易项下相关权益实现的情况，包括但不限于公司被吊销营业执照或被解散、清算、宣告破产以及其他情形。
        </li>
      </ol>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        对于您通过与我们签署法律文件或向我们申请披露而获知的其他用户、合作机构的资料和信息，您同意并确认：除非法律法规另有规定，或者有权的仲裁机构、司法、行政等权力机关的要求，您仅可将该等资料和信息用于实现、维护您在与该其他用户、合作机构签署的法律文件项下的权益以及履行您在该等法律文件项下的相关义务，不得将该等资料和信息用于其他用途，更不得非法出售该等信息和资料。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">2.5</span>&nbsp;&nbsp;&nbsp;
        除以下情形外，我们不会将您的个人信息转让给任何公司、组织和个人：
      </p>
      <ol style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <li>
          事先获得您的明确同意或授权；
        </li>
        <li>
          根据可适用的法律法规、法律程序的要求、强制性的行政或司法要求所必须的情况进行提供；
        </li>
        <li>
          符合我们、我们的关联方、合作方与您签署的相关协议（包括在线签署的电子协议以及相应的平台规则）或其他的法律文件约定所提供；或
        </li>
        <li>
          <a name="OLE_LINK5"></a
          ><a name="OLE_LINK6"></a
          >如我们或我们的关联方涉及合并、分立、收购、资产或业务转让或类似的交易，您的个人信息可能作为此类交易的一部分而被转移，我们将确保该等信息在转移时的机密性，您同意对此予以认可和理解。
        </li>
      </ol>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">2.6</span>&nbsp;&nbsp;&nbsp;
        我们将会在以下情况下公开披露您的个人信息：
      </p>
      <ol style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <li>
          根据您的需求，在您明确同意的披露方式下披露您所指定的个人信息；
        </li>
        <li>
          根据法律法规的要求、强制性的行政执法或司法要求所必须提供您个人信息的情况下，我们将会依据所要求的个人信息类型和披露方式公开披露您的个人信息。
        </li>
      </ol>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        三.&nbsp;<span class="tu">我们如何保存您的个人信息</span>
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">3.1</span>&nbsp;&nbsp;&nbsp; 保存地域
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        您的个人信息将储存于中华人民共和国境内。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">3.2</span>&nbsp;&nbsp;&nbsp; 保存期限
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        除法律法规另有规定外，我们将永久保存您的个人信息以及相关网络借贷业务数据。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        您的个人信息经匿名化处理后将形成可以使用及流通的数据，我们对此类数据的保存及处理无需另行通知并征得您的同意。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">3.3</span>&nbsp;&nbsp;&nbsp; 安全事件
      </p>
      <p
        class="t2"
        style='font-size:15px;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        i.
        如不幸发生个人信息安全事件后，我们将按照法律法规的要求，及时向您告知安全事件的基本情况和可能的影响、我们已采取或将要采取的处理措施、您可自主防范和降低的风险的建议、对您的补救措施等。<span
          class="fb"
          style="font-weight:bold;"
          >我们会及时将事件相关情况以站内通知、短信通知、电话、邮件等您预留的联系方式告知您，难以逐一告知时我们会采取合理、有效的方式发布公告。</span
        >
      </p>
      <p
        class="t2"
        style='font-size:15px;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        ii.
        我们会及时处置系统漏洞、网络攻击、病毒侵袭及网络侵入等安全风险。在发生危害网络安全的事件时，<span
          class="fb"
          style="font-weight:bold;"
          >我们会按照网络安全事件应急预案，及时采取相应的补救措施，并按照规定向有关主管部门报告。</span
        >
      </p>
      <p
        class="t2"
        style='font-size:15px;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        iii.
        如果我们的物理、技术或管理防护设施遭到破坏，导致信息被非授权访问、公开披露、篡改或损毁，导致您的合法权益受损，我们将严格依照法律的规定承担相应的责任。
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        四.&nbsp;<span class="tu">我们如何保护您的个人信息</span>
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">4.1</span>&nbsp;&nbsp;&nbsp;
        我们非常重视个人信息安全，将采取一切合理可行的技术安全措施，保护您的个人信息：
      </p>
      <ol style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <li>
          我们通过https技术为您提供浏览服务，并通过相应的登录短信验证安全机制、数据库加密及日志加密措施保障用户数据安全；
        </li>
        <li>
          我们建立了数据分级制度，对您的手机号、身份证号等个人敏感信息全程进行加密处理，并设置严格的数据访问权限，确保您的个人信息安全；以及
        </li>
        <li>
          我们不时聘请安全专家为技术人员提供相应培训，并在技术部内部设置相应的安全专家检查系统的安全性。
        </li>
      </ol>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">4.2</span>&nbsp;&nbsp;&nbsp;
        尽管我们采取了上述技术安全措施，但请您理解，在互联网行业由于技术的限制和飞速发展以及可能存在的各种恶意攻击手段，即便我们竭尽所能加强安全措施，也不可能始终保证信息的百分之百安全。请您了解，您使用我们的产品和/或服务时所用的系统和通讯网络，有可能因超出我们的控制能力之外的其他因素而出现安全问题。如您发现自己的个人信息泄密，尤其是您的账户或密码发生泄漏，您应该立即通过好分期客服与我们取得联系，以便我们采取相应措施。
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        五.&nbsp;<span class="tu">您可以如何管理个人信息</span>
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        我们非常重视并保护您关于管理个人信息的权利，并为您提供了管理个人信息的方法。您有权利访问、更正、撤销自己的信息并保护自己的隐私和安全。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">5.1</span>&nbsp;&nbsp;&nbsp; 访问权
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        除法律法规规定的例外情况，无论您何时使用我们的服务，我们都会力求让您顺利访问自己的个人信息。<span
          class="fb"
          style="font-weight:bold;"
          >如果您希望访问或编辑您账户中的个人资料信息（包括但不限于手机号码、电子邮箱、登录密码、手势密码、银行账户信息等），您可以在网页端或APP端中执行此类操作，或联系好分期客服进行编辑；</span
        >
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">5.2</span>&nbsp;&nbsp;&nbsp; 更正权
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        当您需要更新您的个人信息时，或发现我们处理您的个人信息有错误时，您有权做出更正或更新。<span
          class="fb"
          style="font-weight:bold;"
          >您可以自行在相关网页端或APP端进行更正，或通过反馈与报错等将您的更正申请提交给我们。</span
        >在您进行更新或更正前，我们可能会现要求您验证自己的身份，然后再处理您的请求。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">5.3</span>&nbsp;&nbsp;&nbsp; 撤销权
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        您可以<span class="fb" style="font-weight:bold;"
          >改变您授权同意的范围或撤回您的授权，但您撤回同意或授权后，我们可能将无法继续为您提供撤回同意或授权所对应的服务。同时，您知悉并理解，在您撤回同意或授权前提供的个人信息，我们将继续依照可适用的法律法规规定及本隐私权政策进行保存或披露。</span
        >
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">5.4</span>&nbsp;&nbsp;&nbsp; 注销权
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        您可以通过拨打好分期平台上公布的好分期客服电话申请注销您的账户，一旦您注销账户，我们将停止为您提供服务，因此请您谨慎操作。但<span
          class="fb"
          style="font-weight:bold;"
          >您知悉并理解，在您注销账户前提供的个人信息，我们将继续依照可适用的法律法规规定及本隐私权政策进行保存或披露。</span
        >
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">5.5</span>&nbsp;&nbsp;&nbsp; 管理问题
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        如果您无法通过上述方式访问、更正或撤销您的个人信息，或者您无法完成账户注销，或者您就我们收集、使用您信息存在任何疑问，您都可以通过好分期客服与我们联系。为保障安全，我们可能需要您提供书面请求，或以其他方式证明您的身份。我们将在收到您的反馈并验证您身份后尽快答复您的相关请求。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        我们将尽合理商业努力，满足您对于个人信息的访问、更正、撤销及账户注销的要求。但对于无端重复、需要过多技术手段、给他人合法权益带来风险或者非常不切实际的请求，我们可能会予以拒绝。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        对于您合理的请求，我们原则上不收取费用，但对多次重复、超出合理限度的请求，我们将视情况收取一定成本费用。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">5.6</span>&nbsp;&nbsp;&nbsp; 例外
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        按照法律法规要求，以下情况中，<span class="fb" style="font-weight:bold;"
          >我们将无法响应您的请求：</span
        >
      </p>
      <ol style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <li>
          与国家安全、国防安全有关的；
        </li>
        <li>
          与公共安全、公共卫生、重大公共利益有关的；
        </li>
        <li>
          与犯罪侦查、起诉和审判等有关的；
        </li>
        <li>
          有充分证据表明您存在主观恶意或滥用权利的；
        </li>
        <li>
          响应您的请求将导致您或其他个人、组织的合法权益受到严重损害的。
        </li>
      </ol>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        六.&nbsp;<span class="tu">未成年人的个人信息保护</span>
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j2" style="font-weight:normal;">6.1</span
        >&nbsp;&nbsp;&nbsp; 我们非常重视对未成年人个人信息的保护
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        如您是22周岁以下的未成年人，在使用我们的服务前，<span
          class="fb"
          style="font-weight:bold;"
          >请务必要求您的监护人仔细阅读本隐私权政策，并请您在征得您的监护人同意的前提下使用我们的服务或向我们提供信息。</span
        >
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="j2" style="font-weight:normal;">6.2</span
        >&nbsp;&nbsp;&nbsp; 补救措施
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        如果您未能取得您监护人的同意或您未同意您的被监护人使用我们的服务并向我们提供信息，<span
          class="fb"
          style="font-weight:bold;"
          >请您或被监护人立即停止使用我们的服务并及时与我们取得联系。</span
        >在收到您的书面通知而知晓或我们自行知晓，我们在未事先获得监护人同意的情况下收集了未成年人的个人信息时，我们会立即停止相关信息收集及使用。
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        七.&nbsp;<span class="tu">通知和修订</span>
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        本隐私权政策将会随着我们的业务的发展进行更新，以便为您提供更好的服务。我们会通过在网站、APP或其他平台上发出更新版本并在生效前通过公告或以其他适当方式提醒您相关内容的更新，请您及时访问以便了解最新的隐私权政策。
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        八.&nbsp;<span class="tu">您如何联系我们</span>
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">7.1</span>&nbsp;&nbsp;&nbsp; 好分期客服
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        如果您对本隐私权政策有任何疑问、意见或建议，或您在使用我们提供的服务时，就您的个人信息的收集、使用、共享、访问、更正、撤销等相关事宜有任何意见或建议，或您在使用我们提供的服务时遇到任何问题，您都可以通过好分期平台上公布的客服电话（400-0856-608）与我们联系。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <span class="j2">7.2</span>&nbsp;&nbsp;&nbsp; 特别提示
      </p>
      <p
        class="t2"
        style='font-size:15px;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        i.
        我们提醒您，如您反馈的问题涉及您的个人信息，尤其是您的个人敏感信息，请您不要直接在电话中进行透露，我们将会在确保您个人信息安全的情况下与您进一步沟通。
      </p>
      <p
        class="t2"
        style='font-size:15px;text-indent:2em;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        ii.
        部分情况下，为保障您个人信息的安全，我们可能需要您提供书面请求，或以其他方式证明您的身份。我们将在收到您的反馈并验证您的身份后尽快答复您的相关请求。
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        九.&nbsp;<span class="tu">可分割性</span>
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        如果本隐私权政策的任何条款在任何程度上被认定无效或不可执行，本隐私权政策的其余部分不应受其影响且应在法律允许的最大程度内予以执行。本隐私权政策中任何无效或不可执行的条款应被另一有效且可执行的条款取代，并且该条款应具有与该不可执行的条款的原意最接近的效力。
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        十.&nbsp;<span class="tu">其他</span>
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        如本隐私权政策与好分期所运营的任何平台的用户注册/服务协议中规定的个人信息保护条款存在不一致或矛盾之处，请以本隐私权政策的条款为准。
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <br />
      </p>
      <p
        class="fb"
        style='font-size:15px;font-weight:bold;color:rgba(0, 0, 0, 0.9);font-family:"'
      >
        <span class="tu">附：名词解释</span>
      </p>
      <p style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        为了帮助您更好地理解本隐私权政策，将前述条款中的部分名词进行如下解释：
      </p>
      <ul style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <li>
          <span class="fb" style="font-weight:bold;">好分期</span>或<span
            class="fb"
            style="font-weight:bold;"
            >我们</span
          >是指北京微财科技有限公司及其关联方的单称或合称，好分期平台是指北京微财科技有限公司运营的包括但不限于网页端、APP端的任何平台。<span
            class="fb"
            style="font-weight:bold;"
            >关联方</span
          >是指对于任何主体（包括个人、公司、合伙企业、组织或其他任何实体）而言，即其直接或间接控制的主体，或直接或间接控制其的主体，或直接或间接与其受同一主体控制的主体。<span
            class="fb"
            style="font-weight:bold;"
            >控制</span
          >是指通过持有表决权、合约或其他方式，直接或间接地拥有对相关主体的管理和决策作出指示或责成他人作出指示的权力或事实上构成实际控制的其他关系。
        </li>
      </ul>
      <ul style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <li>
          <span class="fb" style="font-weight:bold;">Cookie</span
          >是指支持服务器端（或者脚本）在客户端上存储和检索信息的一种机制，通过增加简单、持续的客户端状态来扩展基于Web的客户端/服务器应用。服务器在向客户端返回HTTP对象的同时发送一条状态信息，并由客户端保存。状态信息中说明了该状态下有效的URL范围。此后，客户端发起的该范围内的HTTP请求都将把该状态信息的当前值从客户端返回给服务器，这个状态信息被称为Cookie。
        </li>
      </ul>
      <ul style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <li>
          <span class="fb" style="font-weight:bold;">个人敏感信息</span
          >是指一旦泄露、非法提供或滥用可能危害人身和财产安全，极易导致个人名誉、身心健康受到损害或歧视性待遇等的个人信息，本隐私权政策中涉及的个人敏感信息包括：姓名、身份证件号码、手机号码、银行账号、个人生物识别信息等。
        </li>
      </ul>
      <ul style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <li>
          <span class="fb" style="font-weight:bold;">匿名化</span
          >是指通过对个人信息的技术处理，使得个人信息主体无法被识别，且处理后的信息不能被复原的过程。
        </li>
      </ul>
      <ul style='font-size:15px;color:rgba(0, 0, 0, 0.9);font-family:"'>
        <li>
          <span class="fb" style="font-weight:bold;">设备</span
          >是指可用于使用好分期产品和/或服务的装置，例如桌面设备、平板电脑或智能手机等。
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import headTop from '@/components/header/headTop'
export default {
  data () {
    return {
      headTitle: '注册协议',
      dealType: 1 //1 - 注册协议  2 - 隐私协议
    }
  },
  computed: {},
  components: {
    headTop
  },
  mounted () {
    this.dealType = Number(this.$route.params.type)
  },
  created () {},
  methods: {
    toNext () {}
  }
}
</script>
<style scoped lang="scss">
.deal-container {
  h3 {
    font-size: 1.17em;
    font-weight: bold;
  }
}
</style>
<style lang="scss" scope>
.deal-page {
  padding: 0 0.1rem;
  padding-top: 0.1rem;
  line-height: 1.5;
}
</style>
