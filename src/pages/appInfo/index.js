import React from 'react';
import AppHeader from '../../components/app_header/AppHeader';
import { useParams } from 'react-router-dom';
import ContactBar from '../../components/comm/Contact/index.js';
import icon_location from '../../static/icon_location.png';
import axios from 'axios';
// controls whether the opening screen should show.
import './index.scss';
import { useState } from 'react';
import Highlight from 'react-highlight';
import 'highlight.js/styles/ocean.css';
import NavHeader from '../../components/NavHeader';
import Footer from '../../components/comm/layout/Footer';
// const dev_mode = false;
const dev_mode = true;

function ApiInfo() {
  const params = useParams();
  const [data, setData] = useState({
    code: 200,
    msg: 'OK',
    data: {
      id: '',
      title: ' ',
      description: 'description',
      creator: 'creator',
      tags: ['tag1', 'tag2'],
      demo: 'demo code\ndemo code line 2',
      requester: 'requester contract code'
    }
  });

  let url = process.env.REACT_APP_BASE_URL.concat('/saas3/dapi/detail?id=').concat(params['id']);

  React.useEffect(() => {
    axios
      .get(url)
      .then(function (response) {
        response['data']['data']['triggers'] = JSON.parse(response['data']['data']['triggers']);
        setData(response['data']);
        return response;
      })
      .catch(function (error) {
        console.log(error);
        return error;
      });
  }, []);

  const [tab, setTab] = React.useState('marketplace');

  return (
    <div className='app-info'>
      <NavHeader></NavHeader>

      <div className={'apiinfo'} style={{ display: 'grid' }}>
        <div className='article' style={{ zIndex: 3 }}>
          <div className='article_child'>
            <div className='titlediv'>
              <h1 className='text-white'>
                {data.data.title}
              </h1>
              <p className='text-white text-center'>
                Created By <span style={{ color: '#eb2f96' }}>{data.data.creator}</span>
              </p>
            </div>

            <div className='Overview'>
              <h2>Overview</h2>
              <p>{data.data.description}</p>
              <p>
                {data.data.tags?.length > 0 &&
                  data.data.tags.map((tag, tag_index) => {
                    return (
                      <div
                        index={tag_index}
                        style={{ color: 'white', fontSize: '1px', padding: '1px' }}
                      >
                        {tag}
                      </div>
                    );
                  })}
              </p>
            </div>

            <div className='Overview'>
              <h2>Endpoint</h2>
              <p>
                Title : {data.data.triggers?.http[0].endpointId} <br />
                Name : {data.data.triggers?.http[0].endpointName}
                <br />
                id : {data.data.triggers?.http[0].oisTitle}
              </p>
            </div>
            <div className='demo_code'>
              <h2>DEMO Code</h2>
              <Highlight>{data.data.demo}</Highlight>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default ApiInfo;
