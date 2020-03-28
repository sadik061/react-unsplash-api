import React from 'react';

class SearchBar extends React.Component {
    state = {trem:  ''};

    onFormDubmit = (e) => {
        e.preventDefault(); 
        this.props.onSubmit(this.state.term);

    }

    render(){
        return (
        <div className="ui segment">
            <form className="ui form" onSubmit={this.onFormDubmit}>
                <div className="field">
                    <lable>Image search</lable>
                    <input type="text" value={this.state.term} onChange={(e) => this.setState({term: e.target.value})} />
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;