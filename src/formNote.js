import React from 'react';


class FormNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titleRequired: false,
            contentRequired: false
        };
        this.searchRef = React.createRef();
        this.dataTitleRef = React.createRef();
        this.dataContentRef = React.createRef();
        this.handleSaveNew = this.handleSaveNew.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSaveNew(){
        let dataTitle = this.dataTitleRef.current.value.trimLeft();
        let dataContent = this.dataContentRef.current.value.trimLeft();
        // console.log(dataTitle.length)
        if(dataTitle.length <= 0){
            this.setState({ titleRequired: true})
            if(dataContent.length <=0 ){
                this.setState({ contentRequired: true })
            }
            else{
                this.setState({ contentRequired: false})
            }
        }
        else{
            this.setState({ titleRequired: false})
            if(dataContent.length <= 0){
                this.setState({ contentRequired: true })
            }
            else{
                this.setState({ contentRequired: false})
                this.props.dataNote.handleSaveNew(dataTitle, dataContent);
            }
        }
    }

    handleSearch() {
        let search = this.searchRef.current.value.toLowerCase().trimLeft();
        console.log(search);
        this.props.dataNote.handleSearch(search);
    }
    render() {
        return (
            <>
                <div className="input-group mb-3 container">
                    <div className="input-group-prepend">
                        <button className="btn btn-outline-primary" type="button" data-toggle="modal" data-target="#myModal"> <i className="fas fa-plus"></i> </button>
                        <div className="modal" id="myModal">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title"> <i className="far fa-file-alt"></i> New Note </h4>
                                        <button type="button" className="close text-danger" data-dismiss="modal"> <i className="fas fa-times"></i> </button>
                                    </div>
                                    <div className="modal-body">
                                        { this.state.titleRequired ? <button className="btn btn-primary btn-block text-left" disabled>
                                            Title is required
                                        </button> : null}
                                        { this.state.contentRequired ? <button className="btn btn-secondary btn-block text-left" disabled>
                                            Content is required
                                        </button> : null}
                                        <div className="form-group">
                                            <label htmlFor="title">Title:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="title"
                                                placeholder="Write Title.."
                                                ref={this.dataTitleRef}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="subject">Content:</label>
                                            <textarea
                                                id="subject"
                                                className="form-control"
                                                name="subject"
                                                placeholder="Write something.."
                                                ref={this.dataContentRef}
                                            >
                                            </textarea>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-success"
                                            data-dismiss="modal"
                                            onClick={this.handleSaveNew}
                                        >
                                            <i className="fas fa-save"></i> Save
                                        </button>
                                        <button type="button" className="btn btn-danger" data-dismiss="modal"> <i className="fas fa-times"></i> Close </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        ref={this.searchRef}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-outline-primary" type="button" onClick={this.handleSearch}> <i className="fas fa-search"></i> </button>
                    </div>
                </div>

            </>
        );
    }
}

export default FormNote;