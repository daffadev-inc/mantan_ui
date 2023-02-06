import React from 'react'
import ClassTable from './ClassTable';

export default function Flex() {
    const classes = [
        {
            classNames: 'displayFlex',
            description: 'Sets the display property of element to flex'
        },
        {
            classNames: 'flexCol',
            description: '(flex-direction: column) stack child elements vertically'
        },
        {
            classNames: 'flexWrap',
            description: '(flex-wrap: wrap) wraps child elements'
        },
        {
            classNames: 'justifyCenter',
            description: '(justify-content: center) center align children on horizontal axis'
        },
        {
            classNames: 'justifyBetween',
            description: '(justify-content: space-between) pushes child elements to opposite ends'
        },
        {
            classNames: 'itemsCenter',
            description: '(align-items: center) center align children on vertical axis'
        },
    ]

    return (
        <div className="mb8 p4 md:pl8 md:pr8">
            <div className="background-section textGray4">
                <h2 className="textXl textGray5 mb4">Flex</h2>
                <p className="textRg lineHeightLg fontNormal textGray5 mb4">
                Untuk menggunakan flexbox untuk elemen Anda, mulailah dengan memberinya class <strong>displayFlex</strong> lalu Anda dapat menggunakan kelas fleksibel lainnya untuk menyesuaikan elemen dan turunannya.
                </p>
            </div>
            <ClassTable classes={classes}></ClassTable>
        </div>
    )
}
