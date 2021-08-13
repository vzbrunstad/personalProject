
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";

var n =16;
var sample = [];
for (var i = 0; i < n; i++){
  var nameObj = {}; // "object constructor" syntax
  nameObj = {key: i,Tier1: "",Tier2: "",Tier3: ""};
  sample.push(nameObj);
}


const columns = [
  {
    dataField: "Tier1",
    text: "Tier 1",
    sort: false
  },
  {
    dataField: "Tier2",
    text: "Tier 2",
    sort: false
  },
  {
    dataField: "Tier3",
    text: "Tier 3",
    sort: false
  },
];
const defaultSorted = [
  {
    dataField: "AverageDraftPosition",
    order: "asc"
  }
];


class PickList extends React.Component {
  render() {
    return (
      <BootstrapTable
        bootstrap4
        keyField="key"
        data={sample}
        columns={columns}
        defaultSorted={defaultSorted}
        cellEdit={cellEditFactory({
          mode: "click",
          blurToSave: true
        })}
      />
    );
  }
}

export default PickList;