import React, {useEffect} from 'react';
import {View, StyleSheet , TouchableOpacity,Text,ScrollView, RefreshControl} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import ActionButtons from './ActionsButtons';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles'
import setData from '../../utils/setData'

const HeadTable = ['Producto', 'Precio $', 'Precio Bs.', 'Acciones'];
let DataTable = [];

const InventoryTable = () => {
  const products = useSelector((state) => state.productsFiltered);
  const dolar = useSelector((state) => state.dolar);
  const dispatch = useDispatch();

  const [refreshing, setRefreshing] = React.useState(false);
  const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
    }
    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      setData(dispatch)
      wait(2000).then(() => setRefreshing(false));
    }, []);

  const setModalShow = (type, product) => {
    dispatch({
      type:'SHOW_MODAL',
      payload:{
        showModal:true,
        modalStyle:type,
        editModalElement:product
      }
    })
  }

  const setDataTable = (products, DataTable, dolar) => {
    DataTable=[];
    products.map((product) => {
      const arr = [];
      arr.push(
        product.product,
        product.price,
        Math.round(product.price * dolar, 2),
        ActionButtons(setModalShow, product),
      );
      DataTable.push(arr);
    });
    return DataTable;
  };


  useEffect(() => setData(dispatch),[])
  DataTable=setDataTable(products, DataTable, dolar);
  return (
    <View style={styles.tableContainer}>
      <Table>
        <Row
          data={HeadTable}
          style={styles.tableHeader}
          textStyle={{ textAlign: 'center', fontWeight:'bold', fontSize:15 }}
        />
      </Table>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
          }>
        <Table>
          <Rows
            data={DataTable}
            style={styles.tableContent}
            textStyle={{ textAlign: 'center', fontSize: 14 }}
          />
        </Table>
      </ScrollView>
    </View>
  );
};

export default InventoryTable;
