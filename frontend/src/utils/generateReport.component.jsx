import React from "react";

import {
  Image,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";


// Create styles
const styles = StyleSheet.create({
  cell: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "auto",
    alignSelf: "stretch",
  },
  header: {
    backgroundColor: "#eee",
  },
  headerText: {
    fontSize: 11,
    fontWeight: 1200,
    color: "#1a245c",
    margin: 8,
  },
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 25,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "stretch",
    flexWrap: "nowrap",
    alignItems: "stretch",
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 35,
    borderRadius: 5,
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 1,
  },
  table: {
    fontSize: 10,
    width: 550,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "stretch",
    flexWrap: "nowrap",
    alignItems: "stretch",
  },
  tableText: {
    margin: 10,
    fontSize: 10,
    color: "#1a245c",
  },
  viewProfile: {
    width: "50%",
    backgroundColor: "#eee",
    borderRadius: 15,
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 1,
    marginTop: 20
  },
  titleText:{
    marginTop: 30,
  },
  viewTextProfile:{
    fontSize: 14,
    fontWeight: "bold",
    color: "#1a245c",
    margin: 8,
  }
});

const GenerateReport = ({ transacRecibidas, transacEmitidas, loggedUser }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        <Image src="/img/header-ubanca.png" style={{ width: "100%" }} />
        <View style={styles.viewProfile}>
          <Text style={styles.viewTextProfile}>Nombres: {loggedUser.firstnames}</Text>
          <Text style={styles.viewTextProfile}>Apellidos: {loggedUser.lastnames}</Text>
          <Text style={styles.viewTextProfile}>DPI: {loggedUser.dpi}</Text>
          <Text style={styles.viewTextProfile}>No. cuenta: {loggedUser.accountNumber}</Text>
        </View>

        <View>
          <Text style={styles.titleText}> Transferencias Recibidas </Text>
          <Text>
            {" "}
            {transacRecibidas.length === 0 &&
              "NO TIENES TRANSACCIONES RECIBIDAS"}{" "}
          </Text>
          <View style={[styles.row, styles.header]}>
            <Text style={[styles.headerText, styles.cell]}>Cuenta Origen</Text>
            <Text style={[styles.headerText, styles.cell]}>Cuenta Destino</Text>
            <Text style={[styles.headerText, styles.cell]}>
              Monto Transferencia
            </Text>
          </View>
          {transacRecibidas.map((transact, index) => (
            <View key={index} style={[styles.row]}>
              <Text style={[styles.cell, styles.tableText]}>
                {" "}
                {transact.accountNumber1}{" "}
              </Text>
              <Text style={[styles.cell, styles.tableText]}>
                {" "}
                {transact.accountNumber2}{" "}
              </Text>
              <Text style={[styles.cell, styles.tableText]}>
                {" "}
                {transact.transferredAmount}{" "}
              </Text>
            </View>
          ))}

          <Text style={styles.titleText}> Transferencias Emitidas </Text>
          <Text>
            {" "}
            {transacEmitidas.length === 0 &&
              "NO TIENES TRANSACCIONES EMITIDAS"}{" "}
          </Text>
          
          <View style={[styles.row, styles.header]}>
            <Text style={[styles.headerText, styles.cell]}>Cuenta Origen</Text>
            <Text style={[styles.headerText, styles.cell]}>Cuenta Destino</Text>
            <Text style={[styles.headerText, styles.cell]}>
              Monto Transferencia
            </Text>
          </View>
          {transacEmitidas.map((transact, index) => (
            <View key={index} style={[styles.row]}>
              <Text style={[styles.cell, styles.tableText]}>
                {" "}
                {transact.accountNumber1}{" "}
              </Text>
              <Text style={[styles.cell, styles.tableText]}>
                {" "}
                {transact.accountNumber2}{" "}
              </Text>
              <Text style={[styles.cell, styles.tableText]}>
                {" "}
                {transact.transferredAmount}{" "}
              </Text>
            </View>
          ))}
          

        </View>
      </Page>
    </Document>
  );
};

export default GenerateReport;
