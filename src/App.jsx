import React from 'react';
import './App.css';

import Card from './components/layout/Card'

import StudentGrade from './components/StudentGrades'
import Parent from './components/Parent'
import Child from './components/Child'
import ApprovedList from './components/ApprovedList'
import StudentList from './components/StudentList'
import ProductTable from './components/ProductTable'
import Input from './components/forms/Input/Input'
import Counter from './components/Counter/Counter'
import CounterWithInput from './components/CounterWithInput'

import students from './data/students';
import products from './data/products';

export default () => (
    <div className="Grid">
        <Card title="Grade card" desc="Card with grades" color="#00005c">
            <StudentGrade name="Carlos" maxGrade="10" minGrade="0"></StudentGrade>
        </Card>
        <Card title="Family card" desc="Family cards" color="#58b4ae">
            <Parent familyName="Eberle">
                <Child name="Cee" style={{ marginBottom: '10px' }}></Child>
                <Child name="Richard"></Child>
            </Parent>
        </Card>
        <Card title="List card" desc="Card with lists" color="#d63447">
            <StudentList students={students}></StudentList>
        </Card>
        <Card title="Product card" desc="Card with table" color="#ff5200">
            <ProductTable products={products}></ProductTable>
        </Card>
        <Card title="Approved card" desc="Appoved students" color="#7d5a5a">
            <ApprovedList students={students}></ApprovedList>
        </Card>
        <Card title="Controled state" desc="Controling state" color="#140303">
            <Input label="Enter text"></Input>
        </Card>
        <Card title="Counter" desc="Controlling state" color="#259f6c">
            <Counter></Counter>
            <Counter initAt={5}></Counter>
        </Card>
        <Card title="Counter with Input" desc="Controlling state" color="#c81912">
            <CounterWithInput></CounterWithInput>
        </Card>
    </div>
)