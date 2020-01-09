import React from 'react';

export default function ExportReport() {

    let data = [
        {
            "type": 1,
            "data": {
                "title": "当前系统中cpu个数为8\n",
                "color": "red"
            }
        },
        {
            "type": 1,
            "data": {
                "title": "系统存在cpu使用率健康，内核态使用率正常。",
                "color": "green"
            }
        }
    ];

    return (
        <div style={{}}>
            {data.map(item => {
                return getItemView(item);
            })}
        </div>
    );

    function getItemView(item) {
        item.data.title = item.data.title.replace('\n', '<br/>');
        return <span style={{color: item.data.color}} dangerouslySetInnerHTML={{__html: item.data.title}}></span>;
    }
}