import React from 'react';
import {Stats, BigBreadcrumbs, WidgetGrid, JarvisWidget}  from '../../../components';
import Datatable from '../../../components/tables/Datatable';
import axios from "axios";


// import data from "./data-profiller.json";


export default class Datatables extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profiller: []
    }
  }


  componentDidMount() {

        axios
          .get("/assets/data/profiller.json")
          .then(res => {
            const profiller = res.data;
            this.setState({ profiller });
          })
          .catch(err => {
            console.log(err);
          });

  }

  render() {

        // const DataGrid = () => {
        //   return this.state.profiller.map(profil => {
        //     return (
        //       <tr>
        //         <td>
        //           <label className="checkbox">
        //             <input key={profil.id} type="checkbox" name="checkbox-inline" />
        //           </label>
        //         </td>
        //         <td>{profil.id}</td>
        //         <td>{profil.name}</td>
        //         <td>{profil.status}</td>
        //         <td>{profil.timestamp}</td>
        //         <td>
        //           <button>Profili Sil</button>
        //         </td>
        //       </tr>
        //     );
        //   });
        // };

    return <div id="content">
        {/* <div className="row">
          <BigBreadcrumbs items={['Genel Tanımlar', 'Profiller']} icon="fa fa-fw fa-table"
                          className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
          <Stats />
        </div> */}

        {/* <ul>
        { this.state.profiller.map(profil => <li>{profil.name}</li>)}
        </ul> */}

        <WidgetGrid>
          <div className="row">
            <article className="col-sm-12">
              <JarvisWidget editbutton={false} color="light" colorbutton={false}>
                <header>
                  <span className="widget-icon">
                    {" "}
                    <i className="fa fa-table" />{" "}
                  </span> <h2>Profiller</h2>
                </header>
                <div>
                  <div className="widget-body no-padding">
                    {/* <Datatable options={{ ajax: "assets/api/tables/data-profiller.json", columns: [{ data: "id" }, { data: "name" }, { data: "status" }, { data: "timestamp" }] }} paginationLength={true} className="table table-striped table-bordered table-hover" width="100%">
                      <thead>
                        <tr>
                          <th>Kodu</th>
                          <th data-class="expand">
                            <i className="fa fa-fw fa-user text-muted hidden-md hidden-sm hidden-xs" />
                            Adi
                          </th>
                          <th>Durumu</th>
                          <th data-hide="phone,tablet">
                            <i className="fa fa-fw fa-calendar txt-color-blue hidden-md hidden-sm hidden-xs" />
                            Tarih
                          </th>
                        </tr>
                      </thead>
                    </Datatable> */}

                    <div className="table-responsive">
                      <table className="table table-bordered table-striped table-condensed table-hover smart-form has-tickbox">
                        <thead>
                          <tr>
                            <th />
                            <th>
                              Seç <input type="text" /> <a href="#" className="btn btn-xs btn-default pull-right" />
                            </th>
                            <th>
                              Kodu <input type="text" /> <a href="#" className="btn btn-xs btn-default pull-right" />
                            </th>
                            <th>
                              Adi <input type="text" /> <a href="#" className="btn btn-xs btn-default pull-right" />
                            </th>
                            <th>
                              Durumu <input type="text" /> <a href="#" className="btn btn-xs btn-default pull-right" />
                            </th>
                            <th>
                              Tarih <input type="text" /> <a href="#" className="btn btn-xs btn-default pull-right" />
                            </th>
                            <th>
                              Aksiyon <a href="#" className="btn btn-xs btn-default pull-right" />
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.profiller.map(profil => {
                           return (
                                  <tr key={profil.id}>
                                    <td>
                                      <label className="checkbox">
                                        <input key={profil.id} type="checkbox" name="checkbox-inline" />
                                      </label>
                                    </td>
                                    <td>{profil.id}</td>
                                    <td>{profil.name}</td>
                                    <td>{profil.status}</td>
                                    <td>{profil.timestamp}</td>
                                    <td>
                                      <button>Profili Sil</button>
                                    </td>
                                  </tr>
                           )
                          })
                        }

                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </JarvisWidget>
            </article>
          </div>
        </WidgetGrid>
      </div>;
  }
}