import React from "react";

import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import ForceGraph3D from 'react-force-graph-3d';

import './network.css'
import { goToOverview, white_paper_link } from "../../App";




const NetworkGraph = ({style, className, height}) => {

    const _height = height ? height : window.innerHeight
    
    const deg2rad = deg => { return deg * Math.PI / 180; }
    const rad2deg = rad => { return rad * 180 / Math.PI; }
    

    const distance = 800;

    // const graphElem = document.getElementById("3d-graph");

    const graph = React.useRef()

    const [ gData, setGData ] = React.useState({nodes:[],links:[]})

    React.useEffect(()=>{
        const N = 200;
        const nodes = [...Array(N).keys()].map(i => {
            return { 
                id: i,
                val: (Math.random() * 1.5) + 1
            };
        });

        function generateLinks(nodes) {
            let links = [];
            nodes.forEach(node => {
                let numNodeLinks = Math.round(Math.random() * (0.75 + Math.random())) + 1;
                for(let i = 0; i < numNodeLinks; i++) {
                    links.push({
                        source: node.id,
                        target: Math.round(Math.random() * (node.id > 0 ? node.id - 1 : node.id))
                    });
                }
            });
            return links;
        }

        const links = generateLinks(nodes);
        setGData({nodes, links});
    },[])

    React.useEffect(()=>{
        if(graph.current){
            const bloomPass = new UnrealBloomPass();
            bloomPass.strength = 3;
            bloomPass.radius = 0.3;
            bloomPass.threshold = 0.3;
            graph.current.postProcessingComposer().addPass(bloomPass)
        }
    },[graph])

    const [ angle, setAngle ] = React.useState(0)

    
    React.useEffect(()=>{
        setTimeout(()=>{
            setAngle(angle + 0.5);
            if(graph.current){
                // console.log("try to rotate")
                graph.current.cameraPosition({
                    x: distance * Math.sin(deg2rad(angle)),
                    z: distance * Math.cos(deg2rad(angle)),
                },{x:0,y:0,z:0},100)
                // dconsole.log(angle, distance * Math.sin(deg2rad(angle)), distance * Math.cos(deg2rad(angle)),)
                // console.log(graph.current.cameraPosition() )
            }
        },100)
    },[angle])

    // window.addEventListener('resize', e => {
    //     let width = window.innerWidth;
    //     let height = window.innerHeight;
        
    //     Graph.width(width);
    //     Graph.height(height);
    //     Graph.refresh();
    // });

    const title = "DeAI Delivers a Web3.0 SaaS Solution"


    return (
        <div
            id="3d-graph"
            style={{
                zIndex:1,
                height:_height,
                ...style
            }}
            className={className}
        >
            <div style={{opacity:0.8}}>
                <ForceGraph3D
                    height={_height}
                    width={document.scrollingElement.clientWidth}
                    ref={graph}
                    graphData={gData}
                    nodeRelSize={2}
                    nodeOpacity={1}
                    linkWidth={2}
                    nodeAutoColorBy={"#161922"}
                    backgroundColor="#161922"
                    linkDirectionalParticles={2}
                    linkDirectionalParticleSpeed={0.004}
                    linkDirectionalParticleWidth={5}
                    enableNodeDrag={false}
                    enableNavigationControls={false}
                    enablePointerInteraction={false}
                    showNavInfo={false}
                />
            </div>
            <div className="graph-title-container">

                <div className="relative-container" style={{marginBottom: 'calc(4vw + 20px)'}}>
                    <h1 className="graph-title-shadow"> {title} </h1>
                    <h1 className="graph-title" style={{zIndex:2}}> {title} </h1>
                </div>
                <p className="graph-text">DeAI is Decentralized AI as a Service. Read <a onClick={()=>{window.open(white_paper_link)}}> Whitepaper </a>to Learn More</p>
            </div>
        </div>
    )
}

export default NetworkGraph