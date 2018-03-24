import React from 'react'

import JarvisWidget from '../../../components/widgets/JarvisWidget'
import D3Map from '../../../components/graphs/d3/D3Map'
import SparklineContainer from '../../../components/graphs/inline/SparklineContainer'

export default class BirdEyeWidget extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      data: {"Afghanistan":16.63,"Albania":11.58,"Algeria":158.97,"Angola":85.81,"Antigua and Barbuda":1.1,"Argentina":351.02,"Armenia":8.83,"Australia":1219.72,"Austria":366.26,"Azerbaijan":52.17,"Bahamas":7.54,"Bahrain":21.73,"Bangladesh":105.4,"Barbados":3.96,"Belarus":52.89,"Belgium":461.33,"Belize":1.43,"Benin":6.49,"Bhutan":1.4,"Bolivia":19.18,"Bosnia and Herzegovina":16.2,"Botswana":12.5,"Brazil":2023.53,"Brunei":11.96,"Bulgaria":44.84,"Burkina Faso":8.67,"Burundi":1.47,"Cambodia":11.36,"Cameroon":21.88,"Canada":1563.66,"Cape Verde":1.57,"Central African Republic":2.11,"Chad":7.59,"Chile":199.18,"China":5745.13,"Colombia":283.11,"Comoros":0.56,"Costa Rica":35.02,"Croatia":59.92,"Cyprus":22.75,"Czech Republic":195.23,"Democratic Republic of the Congo":12.6,"Denmark":304.56,"Djibouti":1.14,"Dominica":0.38,"Dominican Republic":50.87,"East Timor":0.62,"Ecuador":61.49,"Egypt":216.83,"El Salvador":21.8,"Equatorial Guinea":14.55,"Eritrea":2.25,"Estonia":19.22,"Ethiopia":30.94,"Fiji":3.15,"Finland":231.98,"France":2555.44,"Gabon":12.56,"Gambia":1.04,"Georgia":11.23,"Germany":3305.9,"Ghana":18.06,"Greece":305.01,"Grenada":0.65,"Guatemala":40.77,"Guinea":4.34,"Guinea-Bissau":0.83,"Guyana":2.2,"Haiti":6.5,"Honduras":15.34,"Hong Kong":226.49,"Hungary":132.28,"Iceland":12.77,"India":1430.02,"Indonesia":695.06,"Iran":337.9,"Iraq":84.14,"Ireland":204.14,"Israel":201.25,"Italy":2036.69,"Ivory Coast":22.38,"Jamaica":13.74,"Japan":5390.9,"Jordan":27.13,"Kazakhstan":129.76,"Kenya":32.42,"Kiribati":0.15,"Kuwait":117.32,"Kyrgyzstan":4.44,"Laos":6.34,"Latvia":23.39,"Lebanon":39.15,"Lesotho":1.8,"Liberia":0.98,"Libya":77.91,"Lithuania":35.73,"Luxembourg":52.43,"Macedonia":9.58,"Madagascar":8.33,"Malawi":5.04,"Malaysia":218.95,"Maldives":1.43,"Mali":9.08,"Malta":7.8,"Mauritania":3.49,"Mauritius":9.43,"Mexico":1004.04,"Moldova":5.36,"Mongolia":5.81,"Montenegro":3.88,"Morocco":91.7,"Mozambique":10.21,"Myanmar":35.65,"Namibia":11.45,"Nepal":15.11,"Netherlands":770.31,"New Zealand":138,"Nicaragua":6.38,"Niger":5.6,"Nigeria":206.66,"Norway":413.51,"Oman":53.78,"Pakistan":174.79,"Panama":27.2,"Papua New Guinea":8.81,"Paraguay":17.17,"Peru":153.55,"Philippines":189.06,"Poland":438.88,"Portugal":223.7,"Qatar":126.52,"Republic of the Congo":11.88,"Romania":158.39,"Russian Federation":3476.91,"Rwanda":5.69,"Saint Kitts and Nevis":0.56,"Saint Lucia":1,"Saint Vincent and the Grenadines":0.58,"Samoa":0.55,"Sao Tome and Principe":0.19,"Saudi Arabia":434.44,"Senegal":12.66,"Serbia":38.92,"Seychelles":0.92,"Sierra Leone":1.9,"Singapore":217.38,"Slovakia":86.26,"Slovenia":46.44,"Solomon Islands":0.67,"South Africa":354.41,"South Korea":986.26,"Spain":1374.78,"Sri Lanka":48.24,"Sudan":65.93,"Suriname":3.3,"Swaziland":3.17,"Sweden":444.59,"Switzerland":522.44,"Syria":59.63,"Taiwan":426.98,"Tajikistan":5.58,"Tanzania":22.43,"Thailand":312.61,"Togo":3.07,"Tonga":0.3,"Trinidad and Tobago":21.2,"Tunisia":43.86,"Turkey":729.05,"Turkmenistan":0,"Uganda":17.12,"Ukraine":136.56,"United Arab Emirates":239.65,"United Kingdom":2258.57,"United States":6624.18,"Uruguay":40.71,"Uzbekistan":37.72,"Vanuatu":0.72,"Venezuela":285.21,"Vietnam":101.99,"Yemen":30.02,"Zambia":15.69,"Zimbabwe":5.57, "Bolivia, Plurinational State of":121.34,"Somalia": 0.47,"Tanzania, United Republic of": 0.78,"South Sudan": 0.98,"Congo, the Democratic Republic of the": 1.45}
    }

  }
  render() {
    return (
      <JarvisWidget colorbutton={false} editbutton={false}>

        <header>
          <span className="widget-icon"> <i className="fa fa-map-marker"/> </span>

          <h2>Birds Eye</h2>

          <div className="widget-toolbar hidden-mobile">
            <span className="onoffswitch-title"><i className="fa fa-location-arrow"/> Realtime</span>
            <span className="onoffswitch">
                                        <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox"
                                               defaultChecked id="myonoffswitch"/>
                                            <label className="onoffswitch-label" htmlFor="myonoffswitch"> <span
                                              className="onoffswitch-inner" data-swchon-text="YES"
                                              data-swchoff-text="NO"/> <span
                                              className="onoffswitch-switch"/> </label> </span>
          </div>
        </header>

        <div>
          <div className="widget-body no-padding">
            <D3Map data={this.state.data}/>

            <div id="heat-fill">
              <span className="fill-a">0</span>

              <span className="fill-b">5,000</span>
            </div>
            <SparklineContainer>
              <table className="table table-striped table-hover table-condensed">
                <thead>
                <tr>
                  <th>Country</th>
                  <th>Visits</th>
                  <th className="text-align-center">User Activity</th>
                  <th className="text-align-center">Online</th>
                  <th className="text-align-center">Demographic</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td><a href="#">USA</a></td>
                  <td>4,977</td>
                  <td className="text-align-center">
                    <div className="sparkline txt-color-blue text-align-center"
                         data-sparkline-height="22px" data-sparkline-width="90px"
                         data-sparkline-barwidth="2">
                      2700, 3631, 2471, 1300, 1877, 2500, 2577, 2700, 3631, 2471,
                      2000, 2100, 3000
                    </div>
                  </td>
                  <td className="text-align-center">143</td>
                  <td className="text-align-center">
                    <div className="sparkline display-inline" data-sparkline-type='pie'
                         data-sparkline-piecolor='["#E979BB", "#57889C"]'
                         data-sparkline-offset="90" data-sparkline-piesize="23px">
                      17,83
                    </div>
                    <div
                      className="btn-group display-inline pull-right text-align-left hidden-tablet"
                      data-dropdown>
                      <button className="btn btn-xs btn-default dropdown-toggle">
                        <i className="fa fa-cog fa-lg"></i>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-xs pull-right">
                        <li>
                          <a href="#"><i
                            className="fa fa-file fa-lg fa-fw txt-color-greenLight"></i>
                            <u>P</u>DF</a>
                        </li>
                        <li>
                          <a href="#"><i
                            className="fa fa-times fa-lg fa-fw txt-color-red"></i>
                            <u>D</u>elete</a>
                        </li>
                        <li className="divider"></li>
                        <li className="text-align-center">
                          <a href="#">Cancel</a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><a href="#">Australia</a></td>
                  <td>4,873</td>
                  <td className="text-align-center">
                    <div className="sparkline txt-color-blue text-align-center"
                         data-sparkline-height="22px" data-sparkline-width="90px"
                         data-sparkline-barwidth="2">
                      1000, 1100, 3030, 1300, -1877, -2500, -2577, -2700, 3631, 2471,
                      4700, 1631, 2471
                    </div>
                  </td>
                  <td className="text-align-center">247</td>
                  <td className="text-align-center">
                    <div className="sparkline display-inline" data-sparkline-type='pie'
                         data-sparkline-piecolor='["#E979BB", "#57889C"]'
                         data-sparkline-offset="90" data-sparkline-piesize="23px">
                      22,88
                    </div>
                    <div
                      className="btn-group display-inline pull-right text-align-left hidden-tablet">
                      <button className="btn btn-xs btn-default dropdown-toggle"
                              data-toggle="dropdown">
                        <i className="fa fa-cog fa-lg"></i>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-xs pull-right">
                        <li>
                          <a href="#"><i
                            className="fa fa-file fa-lg fa-fw txt-color-greenLight"></i>
                            <u>P</u>DF</a>
                        </li>
                        <li>
                          <a href="#"><i
                            className="fa fa-times fa-lg fa-fw txt-color-red"></i>
                            <u>D</u>elete</a>
                        </li>
                        <li className="divider"></li>
                        <li className="text-align-center">
                          <a href="#">Cancel</a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><a href="#">India</a></td>
                  <td>3,671</td>
                  <td className="text-align-center">
                    <div className="sparkline txt-color-blue text-align-center"
                         data-sparkline-height="22px" data-sparkline-width="90px"
                         data-sparkline-barwidth="2">
                      3631, 1471, 2400, 3631, 471, 1300, 1177, 2500, 2577, 3000, 4100,
                      3000, 7700
                    </div>
                  </td>
                  <td className="text-align-center">373</td>
                  <td className="text-align-center">
                    <div className="sparkline display-inline" data-sparkline-type='pie'
                         data-sparkline-piecolor='["#E979BB", "#57889C"]'
                         data-sparkline-offset="90" data-sparkline-piesize="23px">
                      10,90
                    </div>
                    <div
                      className="btn-group display-inline pull-right text-align-left hidden-tablet">
                      <button className="btn btn-xs btn-default dropdown-toggle"
                              data-toggle="dropdown">
                        <i className="fa fa-cog fa-lg"></i>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-xs pull-right">
                        <li>
                          <a href="#"><i
                            className="fa fa-file fa-lg fa-fw txt-color-greenLight"></i>
                            <u>P</u>DF</a>
                        </li>
                        <li>
                          <a href="#"><i
                            className="fa fa-times fa-lg fa-fw txt-color-red"></i>
                            <u>D</u>elete</a>
                        </li>
                        <li className="divider"></li>
                        <li className="text-align-center">
                          <a href="#">Cancel</a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><a href="#">Brazil</a></td>
                  <td>2,476</td>
                  <td className="text-align-center">
                    <div className="sparkline txt-color-blue text-align-center"
                         data-sparkline-height="22px" data-sparkline-width="90px"
                         data-sparkline-barwidth="2">
                      2700, 1877, 2500, 2577, 2000, 3631, 2471, -2700, -3631, 2471,
                      1300, 2100, 3000,
                    </div>
                  </td>
                  <td className="text-align-center">741</td>
                  <td className="text-align-center">
                    <div className="sparkline display-inline" data-sparkline-type='pie'
                         data-sparkline-piecolor='["#E979BB", "#57889C"]'
                         data-sparkline-offset="90" data-sparkline-piesize="23px">
                      34,66
                    </div>
                    <div
                      className="btn-group display-inline pull-right text-align-left hidden-tablet">
                      <button className="btn btn-xs btn-default dropdown-toggle"
                              data-toggle="dropdown">
                        <i className="fa fa-cog fa-lg"></i>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-xs pull-right">
                        <li>
                          <a href="#"><i
                            className="fa fa-file fa-lg fa-fw txt-color-greenLight"></i>
                            <u>P</u>DF</a>
                        </li>
                        <li>
                          <a href="#"><i
                            className="fa fa-times fa-lg fa-fw txt-color-red"></i>
                            <u>D</u>elete</a>
                        </li>
                        <li className="divider"></li>
                        <li className="text-align-center">
                          <a href="#">Cancel</a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><a href="#">Turkey</a></td>
                  <td>1,476</td>
                  <td className="text-align-center">
                    <div className="sparkline txt-color-blue text-align-center"
                         data-sparkline-height="22px" data-sparkline-width="90px"
                         data-sparkline-barwidth="2">
                      1300, 1877, 2500, 2577, 2000, 2100, 3000, -2471, -2700, -3631,
                      -2471, 2700, 3631
                    </div>
                  </td>
                  <td className="text-align-center">123</td>
                  <td className="text-align-center">
                    <div className="sparkline display-inline" data-sparkline-type='pie'
                         data-sparkline-piecolor='["#E979BB", "#57889C"]'
                         data-sparkline-offset="90" data-sparkline-piesize="23px">
                      75,25
                    </div>
                    <div
                      className="btn-group display-inline pull-right text-align-left hidden-tablet">
                      <button className="btn btn-xs btn-default dropdown-toggle"
                              data-toggle="dropdown">
                        <i className="fa fa-cog fa-lg"></i>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-xs pull-right">
                        <li>
                          <a href="#"><i
                            className="fa fa-file fa-lg fa-fw txt-color-greenLight"></i>
                            <u>P</u>DF</a>
                        </li>
                        <li>
                          <a href="#"><i
                            className="fa fa-times fa-lg fa-fw txt-color-red"></i>
                            <u>D</u>elete</a>
                        </li>
                        <li className="divider"></li>
                        <li className="text-align-center">
                          <a href="#">Cancel</a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><a href="#">Canada</a></td>
                  <td>146</td>
                  <td className="text-align-center">
                    <div className="sparkline txt-color-orange text-align-center"
                         data-sparkline-height="22px"
                         data-sparkline-width="90px" data-sparkline-barwidth="2">
                      5, 34, 10, 1, 4, 6, -9, -1, 0, 0, 5, 6, 7
                    </div>
                  </td>
                  <td className="text-align-center">23</td>
                  <td className="text-align-center">
                    <div className="sparkline display-inline" data-sparkline-type='pie'
                         data-sparkline-piecolor='["#E979BB", "#57889C"]'
                         data-sparkline-offset="90" data-sparkline-piesize="23px">
                      50,50
                    </div>
                    <div
                      className="btn-group display-inline pull-right text-align-left hidden-tablet">
                      <button className="btn btn-xs btn-default dropdown-toggle"
                              data-toggle="dropdown">
                        <i className="fa fa-cog fa-lg"></i>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-xs pull-right">
                        <li>
                          <a href="#"><i
                            className="fa fa-file fa-lg fa-fw txt-color-greenLight"></i>
                            <u>P</u>DF</a>
                        </li>
                        <li>
                          <a href="#"><i
                            className="fa fa-times fa-lg fa-fw txt-color-red"></i>
                            <u>D</u>elete</a>
                        </li>
                        <li className="divider"></li>
                        <li className="text-align-center">
                          <a href="#">Cancel</a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                </tbody>
                <tfoot>
                <tr>
                  <td colSpan={5}>
                    <ul className="pagination pagination-xs no-margin">
                      <li className="prev disabled">
                        <a href="#">Previous</a>
                      </li>
                      <li className="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li className="next">
                        <a href="#">Next</a>
                      </li>
                    </ul>
                  </td>
                </tr>
                </tfoot>
              </table>
            </SparklineContainer>
            {/* end content */}

          </div>

        </div>
        {/* end widget div */}
      </JarvisWidget>

    )
  }
}