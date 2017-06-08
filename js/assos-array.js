var info = {
    b1:{
        'title': 'One',
        'pages': 350,
        'etag': '1209'
    },
    b2:{
        'title': 'Two',
        'pages': 450,
        'etag': '456'
    },
    b3:{
        'title': 'Three',
        'pages': 550,
        'etag': '3476'
    }}
var Book = React.createClass({
    render: function() {
        var infoBook = this.props.data;
        var Template = [];
        for(let key in infoBook) {
            Template.push(
                <div key={infoBook[key].etag} className="book">
                    <p>{infoBook[key].title}</p>
                    <p>{infoBook[key].pages}</p>
                </div>
            )
        }

        console.log(Template);

        return (
            <div>
                {Template}
                <p>Result</p>
            </div>
        );
    }
});


var App = React.createClass({
    render: function() {
        return (
            <article2 className="app">
                Hi!
                <Book data={info}/>
            </article2>
        );
    }
});

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);