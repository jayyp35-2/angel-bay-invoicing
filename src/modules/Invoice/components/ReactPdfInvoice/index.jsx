import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

function ReactPdfInvoice() {

  const styles = StyleSheet.create({
    page: {
      backgroundColor: 'white',
      width: "200px"
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
      border: '1px solid red'
    }
  });
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Sectiodij1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  )
}

export default ReactPdfInvoice