import React from 'react';
import { Graph } from '../Graph';
import CSS from '../CSS/NodeLink.module.css';

const { gridContainer, titles, node, chord, info, vis1, vis2 } = CSS;

const Visualizations2 = ({ data }) => {
    return (
        <div className={gridContainer}>
            <h1 id="one" className={`${titles} ${node}`}>Node-edge graph of email network</h1>
            <div className={vis1}>
                <Graph data={data} type={1} />
            </div>
            <div className={info}>
                <h1>Lorem Ipsum</h1>
                <p>Cillum duis amet cupidatat commodo eiusmod dolore anim voluptate dolor ea Lorem nulla adipisicing. Mollit do do velit duis. Excepteur anim sint consectetur tempor fugiat qui sit do ipsum labore quis labore tempor.</p>
                <p>Magna exercitation nulla culpa dolor excepteur deserunt voluptate ullamco minim aute reprehenderit mollit dolor. Nisi duis cupidatat labore reprehenderit do aliqua est occaecat. Enim culpa occaecat pariatur magna reprehenderit do et anim amet. Consequat incididunt exercitation ullamco laboris ex labore sunt labore qui velit est. In do culpa veniam nostrud ipsum aliquip reprehenderit. Laborum mollit est tempor mollit exercitation exercitation proident nisi est. Magna eiusmod eiusmod cillum nisi dolor id reprehenderit consectetur fugiat labore sint pariatur sunt.</p>
                <p>Cillum reprehenderit ullamco eiusmod dolor proident velit. Aute nostrud qui proident nostrud enim id. Id enim magna mollit id amet irure et ex minim occaecat ex. Reprehenderit velit deserunt enim nostrud dolor irure elit exercitation culpa pariatur. Minim reprehenderit officia ex duis consequat incididunt amet adipisicing qui Lorem. Aliqua esse magna pariatur irure. Ad voluptate eu velit excepteur veniam sit magna irure proident.</p>
                <p>Voluptate anim ex nostrud irure in non aliqua elit veniam ut. Officia pariatur eu ex anim ex et. Excepteur sit mollit non commodo duis culpa et excepteur. Labore nostrud magna veniam laboris voluptate deserunt pariatur ad labore sint aliquip duis. Non magna consequat est proident reprehenderit aliquip qui reprehenderit labore irure fugiat excepteur irure exercitation.</p>
                <p>Pariatur quis amet consectetur dolor eu consequat minim ullamco. Anim ea deserunt nulla ullamco exercitation quis irure labore. Excepteur elit ipsum et dolor duis excepteur ullamco cillum non. Ut minim dolor irure labore velit amet nulla. Eiusmod sunt consequat adipisicing nostrud nisi laborum.</p>
                <p>Dolor mollit Lorem labore dolor aliqua magna sunt magna. Tempor sunt cillum elit ut consequat nisi magna officia mollit ut adipisicing id culpa. Pariatur duis nulla dolore aliquip reprehenderit exercitation fugiat minim sit mollit nostrud et culpa. Aute labore dolore velit do minim exercitation velit fugiat.</p>
                <p>Sunt laboris et elit nostrud adipisicing pariatur. Est aliqua id magna laboris irure Lorem anim. Aute est consectetur laborum aliqua consectetur sit mollit Lorem dolor officia. Sunt mollit deserunt nostrud est anim veniam.</p>
                <p>Proident occaecat consequat dolor ex ipsum esse excepteur deserunt adipisicing eu aliqua commodo. Id duis mollit proident laborum sint exercitation consequat et in laboris pariatur laborum. Non occaecat magna irure id consequat velit proident tempor deserunt minim. Et culpa adipisicing laboris qui voluptate ullamco minim nulla dolor dolor labore ut occaecat voluptate.</p>
                <p>Consectetur et in incididunt reprehenderit consequat aliquip elit elit sit do tempor amet. Ad ipsum eu officia sint incididunt ipsum ut quis. Tempor fugiat id in minim minim labore nulla voluptate Lorem reprehenderit commodo cupidatat veniam velit. Consectetur irure labore do aliqua do ad voluptate aliqua culpa aliquip incididunt excepteur. Est fugiat laboris magna in nulla. Aliqua in veniam velit aute ipsum et do.</p>
                <p>Minim velit sunt proident sit Lorem pariatur incididunt anim voluptate quis esse in. Laborum cupidatat culpa laborum tempor aliqua cupidatat qui ipsum. Ullamco et qui amet ullamco voluptate minim reprehenderit quis enim ipsum dolor consectetur. Ullamco proident nulla do excepteur quis proident id sint duis. Veniam irure officia pariatur ipsum excepteur sit ea. Pariatur aute do commodo nulla nulla ea ex dolore in occaecat non.</p>
            </div>
            <h1 id="two" className={`${titles} ${chord}`}>Chord graph of email network</h1>
            <div className={vis2}>
                <Graph data={data} type={2}/>
            </div>
        </div>
    )
}

export default Visualizations2;
