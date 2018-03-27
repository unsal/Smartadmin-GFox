import React from 'react';
import {Stats, WidgetGrid, JarvisWidget}  from '../../../../components';
import UiDialogLauncher from "../../../../components/ui/UiDialogLauncher";
import axios from "axios";
import FormEkle from "./TanimProfillerForm";


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
              <i className="fa fa-trash-o" />&nbsp; Vazgeç
            </button> {' '}
            <button
              className="btn btn-danger"
              onClick={this.props.closeDialog}
            >
              <i className="fa fa-times" />&nbsp; Sil
            </button>
          </div>
        </form>
      </div>
    );
  }
}


export default class Datagrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profiller: [],
      searchString: ""
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

  handleChange = e => {
    e.preventDefault();
    console.log("Key pressed");
    this.setState({ searchString: e.target.value })
  }

  render() {

    let profiller = this.state.profiller;
    let searchString = this.state.searchString.trim().toLowerCase();

    if (searchString.length > 0) {
       profiller = profiller.filter(p => {
         return p.name.toLowerCase().match(searchString);
       }
      )
    }

    return <div id="content">
        <WidgetGrid>
          {/* <a className="btn btn-info btn-xs" href="#">Profil Ekle</a> */}

          <div className="row">
            <article className="col-sm-12">
              <JarvisWidget editbutton={false} color="light" colorbutton={false}>
                <header>
                  <span className="widget-icon">
                    {" "}
                    <i className="fa fa-fw fa-xs fa-user" />
                  </span> <h2>Profiller</h2>
                  <h2>
                    <button className="btn btn-primary btn-xs" data-toggle="modal" data-target="#myModal">
                      Ekle
                    </button>
                  </h2>

                </header>
                <div>
                  <div className="widget-body no-padding">
                    <div className="table-responsive">
                      <table className="table table-bordered table-striped table-condensed table-hover smart-form has-tickbox">
                        <thead>
                          <tr>
                            <th>Kodu</th>
                            <th>
                              <input type="text" placeholder="Adi" onChange={this.handleChange} />
                              <i className="fa fa-fw fa-xs fa-search" />
                            </th>
                            <th>Zaman Damgası</th>
                            <th>Aksiyon</th>
                          </tr>
                        </thead>
                        <tbody>
                          {profiller.map(profil => {
                            return <tr key={profil.id}>
                                <td style={{ textAlign: "right" }}>
                                  {profil.id}
                                </td>
                                <td>
                                  {/* <i className="fa fa-fw fa-xs fa-user" /> */}
                                  {profil.name}
                                </td>
                                <td>{profil.timestamp}</td>
                                <td>
                                  <UiDialogLauncher header="<h4><i className='fa fa-warning'/> Bu profili silmek istediğinizden emin misiniz?</h4>" content={<SilDialogKutusu />} className="btn btn-default">
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

       <FormEkle id="myModal"/>

      </div>;
  }
}