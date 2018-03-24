import React from 'react'

import {Stats, BigBreadcrumbs, WidgetGrid, JarvisWidget}  from '../../../components'

import Datatable from '../../../components/tables/Datatable'


export default class Datatables extends React.Component {
  render() {
    return <div id="content">
        {/* <div className="row">
          <BigBreadcrumbs items={['Genel Tanımlar', 'Profiller']} icon="fa fa-fw fa-table"
                          className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
          <Stats />
        </div> */}

        <WidgetGrid>
          <div className="row">
            <article className="col-sm-12">
              <JarvisWidget editbutton={true} color="darken" colorbutton={false}>
                <header>
                  <span className="widget-icon">
                    {" "}
                    <i className="fa fa-table" />{" "}
                  </span> <h2>Profiller</h2>
                </header>
                <div>
                  <div className="widget-body no-padding">
                    <Datatable options={{ ajax: "assets/api/tables/data-profiller.json", columns: [{ data: "id" }, { data: "name" }, { data: "status" }, { data: "timestamp" }] }} paginationLength={true} className="table table-striped table-bordered table-hover" width="100%">
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
                    </Datatable>
                  </div>
                </div>
              </JarvisWidget>
            </article>
          </div>
        </WidgetGrid>
      </div>;
  }
}