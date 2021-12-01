import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ToastAndroid, Alert} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import Slider from '@react-native-community/slider';

import * as LocalAuthentication from 'expo-local-authentication';

var dimer0 = false
var dimer10 = false
var dimer20 = false
var dimer30 = false
var dimer40 = false
var dimer50 = false
var dimer60 = false
var dimer70 = false
var dimer80 = false
var dimer90 = false
var dimer100 = false

export default function App() {

  const [statusGaragem, setGaragem] = useState('garage-variant');
  const [statusReguest, setReguest] = useState('#F2F4F5');
  const [size, setSize] = useState(0);


  const command=(valor)=>{

    let url = "http://192.168.0."
    let req = new XMLHttpRequest();

    req.onreadystatechange=()=>{
      if(req.status==200 && req.readyState==4){
        setReguest('#F2F4F5')
      }else{
        setReguest('red')
      }
    }

    req.open('GET', url + valor )
    req.send()

    switch (valor){
      case '100/fade':
        setSize(0)
        break;
        
    }
  }

  const dimerValor=()=>{

  if(size == 0 && dimer0 == true ){
    dimer0 = false
    dimer10 = false
    dimer0 = false
    dimer('100/0')
  }
  if(size == 1 && dimer10 == false ){
    dimer0 = true
    dimer10 = true
    dimer20 = false 
    dimer('100/1')
  }
  if(size == 2 && dimer20 == false ){
    dimer10 = false
    dimer20 = true
    dimer30 = false
    dimer('100/2')
  }
  if(size == 3 && dimer30 == false ){
    dimer20 = false
    dimer30 = true
    dimer40 = false
    dimer('100/3')
  }
  if(size == 4 && dimer40 == false ){
    dimer30 = false
    dimer40 = true
    dimer50 = false
    dimer('100/4')
  }
  if(size == 5 && dimer50 == false ){
    dimer40 = false
    dimer50 = true
    dimer60 = false
    dimer('100/5')
  }
  if(size == 6 && dimer60 == false ){
    dimer50 = false
    dimer60 = true
    dimer70 = false
    dimer('100/6')
  }
  if(size == 7 && dimer70 == false ){
    dimer60 = false
    dimer70 = true
    dimer80 = false
    dimer('100/7')
  }
  if(size == 8 && dimer80 == false ){
    dimer70 = false
    dimer80 = true
    dimer90 = false
    dimer('100/8')
  }
  if(size == 9 && dimer90 == false ){
    dimer80 = false
    dimer90 = true
    dimer100 = false
    dimer('100/9')
  }
  if(size == 10 && dimer100 == false ){
    dimer90 = false
    dimer100 = true
    dimer0 = true
    dimer('100/10')
  }

}

  const dimer=(valor)=>{

  let url = "http://192.168.0."
  let req = new XMLHttpRequest();

  req.onreadystatechange=()=>{
    if(req.status==200 && req.readyState==4){
      setReguest('#F2F4F5')
    }else{
      setReguest('red')
    }
  }

  req.open('GET', url + valor )
  req.send()

}

const biometric = async ()=>{

  const validactionBiometric = await LocalAuthentication.isEnrolledAsync({
    
  })
  

  const authenticationBiometric = await LocalAuthentication.authenticateAsync({
    promptMessage:"Portão eletrônico",
    cancelLabel: "Cancelar",
    disableDeviceFallback: false,
  });

  if(authenticationBiometric.success){
    openGate() 
  }
  
};

const openGate =()=>{

  command('200/relea')

    ToastAndroid.showWithGravityAndOffset(
      "Acionando Portão",
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
      25,
      50
    );

    setGaragem("garage-alert-variant")
    var timeoutId = setTimeout ( 
      garagemOpen => {setGaragem("garage-open-variant")}  
    , 2000);
    var timeoutId = setTimeout ( 
    garagem => {setGaragem("garage-variant")}  
    , 4000); 

}

  return(

    <LinearGradient colors={['#1953ff', '#2a75f6']} start={[0.2, 0.3]} end={[1.1, 0.1]} style={styles.container}>
      
      <Text style={styles.nameMenu}>
        <AntDesign name="home" size={25} color={statusReguest} /> Smart Home
      </Text>
      
      <View style={styles.nameView}>
        <View style={styles.menu}>

          <View style={styles.column}>
              <TouchableOpacity style={styles.buttom} 
              onPress={()=>command('200/?rele6')}>
                <View style={styles.ico}><FontAwesome5 name="couch" size={24} color="#0079E2" />
                <View style={styles.ico1}><MaterialCommunityIcons name="lightbulb-on-outline" size={24} color="#0079E2"/></View></View>
                <Text style={styles.text1}>Lustre Sala</Text>
                </TouchableOpacity>  

              <TouchableOpacity style={styles.buttom} 
              onPress={()=>command('200/?rele5')}>
                <View style={styles.ico}><FontAwesome5 name="couch" size={24} color="#0079E2" />
                <View style={styles.ico1}><MaterialCommunityIcons name="lightbulb-on-outline" size={24} color="#0079E2"/></View></View>
                <Text style={styles.text1}>Sanca Sala</Text>
                </TouchableOpacity>

              <TouchableOpacity style={styles.buttom} 
              onPress={()=>command('200/?rele4')}>
                <View style={styles.ico}><TouchableOpacity onPress={()=>command('200/rele1')}><MaterialCommunityIcons name="home-lightbulb-outline" size={32} color="#0079E2"/></TouchableOpacity>
                <View style={styles.ico1}><MaterialCommunityIcons name="lightbulb-on-outline" size={24} color="#0079E2"/></View></View>
                <Text style={styles.text1}>Arandela</Text>
                </TouchableOpacity>
              </View>
        
          <View style={styles.column}>
          
              <LinearGradient colors={['#1953ff', '#2a75f6']} start={[0.2, 0.3]} end={[1.1, 0.1]} style={{flex: 1, margin:10,backgroundColor: '#0079E2',borderRadius: 13,}} >
                <View style={styles.ico}><MaterialCommunityIcons name="bed-king-outline" size={35} color="white" />
                <View style={styles.ico1}><TouchableOpacity onPress={()=>command('100/fade')}><MaterialCommunityIcons name="lightbulb-on-outline" size={24} color="white"/></TouchableOpacity></View></View>
                <View style={styles.buttomDimer}>
                  <Slider
                    minimumValue={0}
                    maximumValue={10}
                    minimumTrackTintColor='#0079E2'
                    maximumTrackTintColor="#0079E2"
                    thumbTintColor='#1652fe'
                    onSlidingStart={dimerValor()}
                    value={size}
                    onValueChange={ (valorDimer) => setSize(valorDimer.toFixed(0))}/>
                </View>
                </LinearGradient>

             <TouchableOpacity style={styles.buttom} 
             onPress={()=>command('100/rele4')}>
               <View style={styles.ico}><MaterialCommunityIcons name="bed-king-outline" size={35} color="#0079E2" />
               <View style={styles.ico1}><MaterialCommunityIcons name="lightbulb-on-outline" size={24} color="#0079E2"/></View></View>
               <Text style={styles.text1}>Luz Quarto</Text>
             </TouchableOpacity>

            <TouchableOpacity style={styles.buttom}
            onPress={()=>command('106/ventilador')}>
               <View style={styles.ico}><MaterialCommunityIcons name="bed-king-outline" size={35} color="#0079E2" />
               <View style={styles.ico1}><MaterialCommunityIcons name="fan" size={24} color="#0079E2"/></View></View>
               <Text style={styles.text1}>Ventilador</Text>
             </TouchableOpacity>
             </View>
        
        </View> 
             <View style={{flex:0, flexDirection:"row", justifyContent: 'center', alignItems: 'center', margin:38, }}>
             <LinearGradient colors={['#1953ff', '#1895ff']} start={[0.2, 0.3]} end={[1.1, 0.1]} style={styles.buttomBottom}>
             <MaterialCommunityIcons name={statusGaragem} size={40} color="#FDFDFD" 
             onPress={biometric} />
             </LinearGradient> 

             <LinearGradient colors={['#1953ff', '#1895ff']} start={[0.2, 0.3]} end={[1.1, 0.1]} style={styles.buttomBottom}>
             <MaterialCommunityIcons name="lightbulb-on-outline" size={37} color="#FDFDFD" 
             onPress={()=>command('200/?rele3')}/>
             </LinearGradient>
        </View>
          
        </View>
        </LinearGradient>

  )
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  },

  nameView: {  
    flex: 10,
    paddingTop:20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor:'#F2F4F5',
   
  },

  nameMenu: {
    flexDirection: "row",
    marginTop: 55,
    marginBottom: 35,
    marginLeft: 39,
    fontSize: 23,
    color: "#F2F4F5",
    fontWeight: "bold",  
  },

  menu: {
    flex: 1,
    flexDirection: "row",
    margin: 30,
    marginBottom: 5, 
    
  },

  column: {
    flex: 1,
  },

  ico: {
    flex: 2,
    flexDirection: "column",
    flexDirection: "row",
    paddingLeft: 10,
    paddingTop: 10,
  },

  ico1: {
    flexDirection: "column",
    flexDirection: "row",
    paddingLeft: 80,
  },

  text1: {
    flex: 1,
    color: "#4C6073",
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
  },

  buttom: {
    flex: 1,
    margin: 10,
    backgroundColor: "#FDFDFD",
    borderRadius: 13,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 1.22,
    elevation: 3,
  },

  buttomBottom: {
    flex: 1,
    margin: 10,
    backgroundColor: "#0079E2",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 1.22,
    elevation: 3,
  },

  buttomDimer: {
    flex: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    backgroundColor: "white",
    marginTop: 30,
    marginBottom: 10,
    justifyContent: "center",
  },
});