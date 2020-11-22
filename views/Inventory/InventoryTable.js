import React, {useEffect} from 'react';
// eslint-disable-next-line prettier/prettier
import {View, StyleSheet , TouchableOpacity,Text,ScrollView} from 'react-native';
// eslint-disable-next-line prettier/prettier
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import ActionButtons from './ActionsButtons';
import {useDispatch, useSelector} from 'react-redux';

const HeadTable = ['Producto', 'Precio $', 'Precio Bs.', 'Acciones'];
const DataTable = [];

const styles = StyleSheet.create({
  tableContainer: {
    borderRadius: 40,
    backgroundColor: '#F5F8FA',
  },
  tableHeader:{
    backgroundColor:'#F5F8FA',
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    borderBottomWidth:1,
    borderColor:'#FF511B',
    height:40
  },
  tableContent:{
    backgroundColor:'#F5F8FA',
  },
});

const setDataTable = (products, DataTable, dolar) => {
  products.map((product) => {
    const arr = [];
    arr.push(
      product.product,
      product.price,
      Math.round(product.price * dolar, 2),
      ActionButtons(),
    );
    DataTable.push(arr);
  });
  return DataTable;
};

const InventoryTable = () => {
  const products = useSelector((state) => state.productsFiltered);
  const dolar = useSelector((state) => state.dolar);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('https://inpimaca-api.herokuapp.com/inventario')
      .then(response => response.json())
      .then(data => dispatch({
        type: 'SET_PRODUCTS',
        payload: data,
      }))
      .catch((err) => console.error(err));
  },[])

  setDataTable(products, DataTable, dolar);
  return (
    <View style={styles.tableContainer}>
      <Table>
        <Row
          data={HeadTable}
          style={styles.tableHeader}
          textStyle={{ textAlign: 'center', fontWeight:'bold', fontSize:15 }}
        />
      </Table>
      <ScrollView>
        <Table>
          <Rows
            data={DataTable}
            style={styles.tableContent}
            textStyle={{ textAlign: 'center', fontSize:14 }}
          />
        </Table>
      </ScrollView>
    </View>
  );
};

export default InventoryTable;
