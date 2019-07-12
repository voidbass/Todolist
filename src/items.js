import React, {Component} from 'react';

export default class Items extends Component {
    constructor(){
        super();
        this.state = {
            hidden: "none",
            show: ""
        }
        this.dataEditNameRef = React.createRef();
        this.dataEditContentRef = React.createRef();
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }
    handleEdit(){
        this.setState({
            hidden: "",
            show: "none"
        })
    }
    handleSave(){
        this.setState({
            hidden: "none",
            show: ""
        })
        // console.log(this.props.index);
        const name = this.dataEditNameRef.current.value;
        const content = this.dataEditContentRef.current.value;
        this.props.dataNote.handleEdit((this.props.index), name, content) ;
    }
    handleCancel(){
        this.setState({
            hidden: "none",
            show: ""
        });
        this.dataEditNameRef.current.value = this.props.name;
        this.dataEditContentRef.current.value = this.props.content;
        // console.log(this.props.name);
    }
    handleDelete(){
        this.setState({
            hidden: "",
            show: "none"
        })
    }
    render() {
        let styleHidden = {
            display: this.state.hidden
        }
        let styleShow = {
            display: this.state.show
        }
        const { index, content, name } = this.props;
        return (
            <tr>
                <td>
                    <button className="btn btn-outline-primary mr-2" style={styleShow} onClick={this.handleEdit}> <i className="fas fa-pencil-alt"></i> </button>
                    <button className="btn btn-outline-success mr-2" style={styleHidden} onClick={this.handleSave}> <i className="fas fa-save"></i> </button>
                    <button className="btn btn-outline-warning mr-2" style={styleHidden} onClick={this.handleCancel}> <i className="fas fa-times"></i> </button>
                    <button className="btn btn-outline-danger mr-2" style={styleShow} onClick={() => { this.props.dataNote.handleDelete(index) }}> <i className="far fa-trash-alt"></i> </button>
                </td>
                <td>
                    <h6 style={styleShow}>{name}</h6>
                    <input
                        type="text"
                        className="form-control font-weight-bold"
                        name="nameEdit" ref={this.dataEditNameRef}
                        defaultValue={name}
                        style={styleHidden}
                    />
                </td>
                <td>
                <h6 style={styleShow}>{content}</h6>
                    <input
                        type="text"
                        className="form-control font-weight-bold"
                        name="nameEdit" ref={this.dataEditContentRef}
                        defaultValue={content}
                        style={styleHidden}
                    />
                </td>
            </tr>
        );
    }
}