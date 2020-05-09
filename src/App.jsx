import React from 'react';
import './App.css';

import Card from './components/layout/Card'

import StudentGrade from './components/StudentGrades'
import Parent from './components/Parent'
import Child from './components/Child'
import StudentList from './components/StudentList'
import ProductTable from './components/ProductTable'

import students from './data/students';
import products from './data/products';

export default () => (
    <div className="Grid">
        <Card title="Grade card" desc="Card with grades" color="#00005c">
            <StudentGrade name="Carlos" maxGrade="10" minGrade="0"></StudentGrade>
        </Card>
        <Card title="Family card" desc="Family cards" color="#58b4ae">
            <Parent familyName="Eberle">
                <Child name="Cee" style={ {marginBottom: '10px'} }></Child>
                <Child name="Richard"></Child>
            </Parent>
        </Card>
        <Card title="List card" desc="Card with lists" color="#d63447">
            <StudentList students={ students }></StudentList>
        </Card> 
        <Card title="Product card" desc="Card with table" color="#ff5200">
            <ProductTable products={ products }></ProductTable>
        </Card>        
    </div>
)