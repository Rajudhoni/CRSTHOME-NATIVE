/* eslint-disable */
import React, {useState} from 'react'
import { FlatList,Button, Dimensions, SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import crstlogo from '../assets/images/crstlogo.jpeg';
import {JobOptions } from '../assets/Data/items';

import ListItem from '../components/ListItem';

const Dashboard = () => {

 
    
    return (
        <SafeAreaView style={{flex:1}}>
            
        <View style={{ flex: 1}}>


            {/* header */}
            <View style={styles.header}>
                <View style={{padding: 5}}>
                <Image source={crstlogo} style={{ height: 30,width: 100, }}  />
                </View>
                <View style={{justifyContent: 'center' , }}>

                 
                   <ListItem />
                    {/* <Entypo name="dots-three-vertical" size={24}  /> */}


                     


                </View>

            </View>
     
        {/* header */}

            {/* header title*/}
                <View style={styles.headertitle}>
                    <Text style={styles.headerText}>Dashboard</Text>
                </View>

            {/* header title */}

              {/* Home Map */}

              <View style={styles.mapview}>
                
                    <Text>I'm a Map</Text>




            </View>

             {/* Home Map */}

                         {/* header title */}

              {/* overview job */}

              <View style={styles.joboverview}>
                    <View style={styles.overviewlayout}>
                        <View style={{justifyContent: 'flex-start', flex: 0.6}}>
                        <Text style={{fontSize: 22, fontWeight: 'bold'}}>Overview</Text>
                        <Text style={{fontSize: 18}}>Today you have 4 jobs</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.textColor}>Start Day</Text>
                        </TouchableOpacity>
                        </View>
                        
                    </View>



                         <View style={styles.overviewlayout2}>
                         <View style={{flex: 0.5}}>
                            <Text style={{fontSize: 14, fontWeight: 'bold',}}>You Have 3 Pick ups Today</Text>


                {/* flatlist */}

                <FlatList 
                            horizontal
                         
                        //    initialNumToRender={1}
                            data={JobOptions.data}
                            keyExtractor={item => item.id}
                            renderItem={({item}) => (


                            <View style={{justifyContent: 'flex-start', marginLeft: 15, marginTop: 10}}>
                                
                                    

                                            
                                                <Text style={styles.optionpickText}>Sony TV</Text>
                                                <Text style={styles.optionpickText}>Samsung TV</Text>
                                                 <Text style={styles.optionpickText}>LG TV</Text>
                                                <Text style={{ marginTop: 10,fontSize: 14, fontWeight: 'bold'}}><Entypo name="warning" color={'red'} size={18}/> Product Pick Up Required</Text> 

                                    
                               
                                
                       
                            </View>
                                                                
                                                                )}
                                           

                                                                /> 
                                                                      {/* flatlist */}
                        </View>
                            
                           
                        
                    </View>


            </View>

             {/* overview jobs*/}

            
        </View>
       
        </SafeAreaView>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    header: {
        borderColor: 'black',
        borderWidth: 2,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    headertitle: {padding: 2, alignItems: 'center', borderColor: 'black', borderBottomWidth: 2,},
   headerText: {fontSize: 16, fontWeight: 'bold' },
   mapview: {flex: 0.6, backgroundColor: '#a0abff', justifyContent: 'center', alignItems: 'center'},
   joboverview: {
                    flex: 0.4, 
                    flexDirection: 'row', 
                    borderColor: 'black', 
                    borderWidth: 2
    },
   overviewlayout: {
       flex: 0.4, 
       borderColor: 'black', 
       borderRightWidth:2,
       alignItems: 'center',
       justifyContent: 'center'
    },
   overviewlayout2: {
       flex: 0.6,
       alignItems: 'center',
       justifyContent: 'center'

   },
   button: {
    marginTop: 10,
    width: 120,
    height: 35, 
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000',
    borderWidth: 2,
   },
   textColor: {
    color: '#000',
    fontSize: 30/2,
}, 
optionpickText: {
    fontSize: 13,
    fontWeight: 'bold'
}
})
