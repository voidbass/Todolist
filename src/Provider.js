import React from 'react';
export const AppContext = React.createContext();

class Provider extends React.Component{
    state = {
        datas: [
            {
                id: 1,
                name: "ReactJS",
                content: "Read react"
            },
            {
                id: 2,
                name: "NodeJS",
                content: "contentJS"
            },
            {
                id: 3,
                name: "QA DB",
                content: "gi ke di"
            }
        ],
        search: "",
        handleSaveNew: (title, content) =>{
            let Item = [{
                id: this.state.datas.length + 1,
                name: title,
                content: content
            }]
            console.log(Item);
            this.setState({
                datas: this.state.datas.concat(Item)
            })
        },
        handleSearch: (search) =>{
            this.setState({
                search: search
            })
            console.log(this.state.search);
        },
        handleDelete: (index) =>{
            let listTodo = this.state.datas;
            listTodo.splice(index, 1);
            this.setState({
                datas: [...listTodo]
            })
        },
        handleEdit: (index, name, content) =>{
            let data = this.state.datas;
            data[index].name = name;
            data[index].content = content;
            this.setState({
                datas: data
            })
            console.log(this.state.datas);
        }
    }

    render(){
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default Provider;