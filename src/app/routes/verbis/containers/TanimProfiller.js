import React from 'react';
import {Stats, BigBreadcrumbs, WidgetGrid, JarvisWidget}  from '../../../components';
import UiDialogLauncher from "../../../components/ui/UiDialogLauncher";
import axios from "axios";


// import data from "./data-profiller.json";
class SilDialogKutusu extends React.Component {
  _submitDialog = e => {
    console.log("submit stuff");
    this.props.closeDialog(e);
  };
  render() {
    return (
      <div id="dialog_simple">
        <form>
          <p>
            Eğer bu profil kişisel veri ve süreç envanteri
            ile ilişkilendirilmişse silinemeyecektir.
            Öncelikle tüm ilişkileri silmeniz gerekir.
          </p>

          <div>
            <button className="btn btn-default" onClick={this._submitDialog}>
              <i className="fa fa-trash-o" />&nbsp; Sil
            </button> {' '}
            <button
              className="btn btn-danger"
              onClick={this.props.closeDialog}
            >
              <i className="fa fa-times" />&nbsp; Vazgeç
            </button>
          </div>
        </form>
      </div>
    );
  }
}


export default class Datatables extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profiller: []
    }
  }


  componentDidMount() {

        axios
          .get("assets/data/profiller.json")
          .then(res => {
            const profiller = res.data;
            this.setState({ profiller });
          })
          .catch(err => {
            console.log(err);
          });

  }

  render() {

    return <div id="content">
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
                    <div className="table-responsive">
                      <table className="table table-bordered table-striped table-condensed table-hover smart-form has-tickbox">
                        <thead>
                          <tr>
                            <th>Kodu</th>
                            <th>
                              <input type="text" placeholder="Adi" />
                            </th>
                            <th>Zaman Damgası</th>
                            <th>Aksiyon</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.profiller.map(profil => {
                            return <tr key={profil.id}>
                                <td
                                  style={{
                                    textAlign:
                                      "right"
                                  }}
                                >
                                  {profil.id}
                                </td>
                                <td>
                                  {profil.name}
                                </td>
                                <td>
                                  {profil.timestamp}
                                </td>
                                <td>
                                  {/* <a className="btn btn-xs btn-default" href="#">
                                    Profili sil
                                  </a> */}

                                  <UiDialogLauncher
                                      header="<h4><i class='fa fa-warning'/> Bu profili silmek istediğinizden emin misiniz?</h4>"
                                      content={<SilDialogKutusu />}
                                      className="btn btn-info">
                                    Profili Sil
                                  </UiDialogLauncher>


                                </td>
                              </tr>;
                          })}
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