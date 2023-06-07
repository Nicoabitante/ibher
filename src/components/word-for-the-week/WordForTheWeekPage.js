import React from 'react';
import Page from '../page/Page';
// import PageBanner from '../page/PageBanner';
// import PageSidebar from '../page/PageSidebar';
// import PageSection from '../page/PageSection';
// import OurBurdenBearer from './OurBurdenBearer';
// import WhereIsGod from './WhereIsGod';
// import TheComfortingCareOfGod from './TheComfortingCareOfGod';
import './WordForTheWeek.css'

class WordForTheWeekPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  handleSectionChange = (bannerImage, title, bannerMobilePosition) => {
    this.setState({
      currentBannerImage: bannerImage,
      title:title,
      bannerMobilePosition:bannerMobilePosition
    })
  }

  render() {
    return (
      <Page>
        <h3>Página en construcción</h3>
      </Page>
    )
  }

}

export default WordForTheWeekPage;
