import React from 'react';
import Items from './items';
import Consumer from './Consumer.js';


class NoteList extends React.Component {
    render() {
        console.log(this.props.dataNote.datas);
        const lists = this.props.dataNote.datas.filter(
            (list) => {
                return list.name.toLowerCase().indexOf(this.props.dataNote.search) !== -1;
            }
        );
        
        console.log("list: ",lists)
        
        const listData = lists.map((item, index) => {
            return  <Consumer key={index}>
                        <Items index={index} {...item} />
                    </Consumer>
        })
        return (
            <table className="table table-hover container">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Title</th>
                        <th scope="col">Content</th>
                    </tr>
                </thead>
                <tbody>
                    {listData}
                </tbody>
            </table>
        );
    }
}

export default NoteList;
