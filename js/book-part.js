var library = [
    {
        "autor":"Jonathan Swift",
        "img":"http://t0.gstatic.com/images?q=tbn:ANd9GcRzF3c1tkASLO-7RTKXAemQUuoLaoyFph3uhxmn-P2kbWhh3mul",
        "name":"Gulliver's Travels",
        "description":"Gulliver goes on four separate voyages in Gulliver's Travels. Each journey is preceded by a storm. All four voyages bring new perspectives to Gulliver's life and new opportunities for satirizing the ways of England. The first voyage is to Lilliput, where Gulliver is huge and the Lilliputians are small.",
        "pages":"125"
    },
    {
        "autor":"Lewis Carroll",
        "img":"http://t2.gstatic.com/images?q=tbn:ANd9GcTa_9WE4U3tScNG0Cts30MVlaesIVvFde6U10-d6YJNUIf6KqKk",
        "name":"Alice's Adventures in Wonderland",
        "description":"Alice sits on a riverbank on a warm summer day, drowsily reading over her sister's shoulder, when she catches sight of a White Rabbit in a waistcoat running by her. The White Rabbit pulls out a pocket watch, exclaims that he is late, and pops down a rabbit hole.",
        "pages":"225"
    },
    {
        "autor":"Eleanor H. Porter",
        "img":"http://t1.gstatic.com/images?q=tbn:ANd9GcTKvUhVsv1FJXMxEhi1dRKr7cmVEclev_RBA7xJwfH7EQGpWfPH",
        "name":"Pollyanna",
        "description":"The title character is Pollyanna Whittier, a young orphan who goes to live in the fictional town of Beldingsville, Vermont, with her wealthy but stern and cold spinster Aunt Polly, who does not want to take in Pollyanna but feels it is her duty to her late sister.",
        "pages":"425"
    }
];

var MainMenu = React.createClass({
    render: function(){
        return(
            <ul className="nav nav-pills nav-stacked">
                <li><a href="#">Home</a></li>
                <li><a href="#">Books</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        )
    }
});
var bookSearchValue='';
var SearchBook = React.createClass({
    // getInitialState: function () {
    //     return{
    //         searchValue: ''
    //     };
    // },
    // onInputBook: function(e) {
    //     this.setState({searchValue: e.target.value})
    // },
    onSearchBtnClick: function() {
        // alert(this.state.searchValue);
        // console.log(this.refs);
        bookSearchValue =ReactDOM.findDOMNode(this.refs.searchInput).value;
        alert(bookSearchValue);
        console.log(bookSearchValue);




    },

    render: function() {
        return (
            <div>
                <form className="form-inline">
                    <div className="form-group">
                        <input
                        className='form-control'
                        // value={this.state.searchValue}
                        // onChange={this.onInputBook}
                        defaultValue=''
                        placeholder='Get a book'
                        ref='searchInput'
                        />
                        <button  type="submit" className="btn btn-default" onClick={this.onSearchBtnClick}>Search</button>
                    </div>
                </form>
            </div>
        );

    }
});

{/*<div>*/}
    {/*<form className="form-inline">*/}
        {/*<div className="form-group">*/}
            {/*<input*/}
                {/*className='form-control'*/}
                {/*// value={this.state.searchValue}*/}
                {/*// onChange={this.onInputBook}*/}
                {/*defaultValue=''*/}
                {/*placeholder='Get a book'*/}
                {/*ref='searchInput'*/}
            {/*/>*/}
            {/*<button  type="submit" className="btn btn-default" onClick={this.onSearchBtnClick}>Search</button>*/}
        {/*</div>*/}
    {/*</form>*/}
{/*</div>*/}

var LibraryItem = React.createClass({
    propTypes:{
        dataElement: React.PropTypes.shape({
            autor: React.PropTypes.string.isRequired,
            img: React.PropTypes.string.isRequired,
            name: React.PropTypes.string.isRequired,
            description: React.PropTypes.string.isRequired,
            pages: React.PropTypes.string.isRequired
        })
    },
    getInitialState: function () {
        return{
            visible: false,
        };
    },
    readmoreClick: function (e) {
        e.preventDefault();
        this.setState({visible:true});
    },
    hideClick: function (e) {
        e.preventDefault();
        this.setState({visible:false});
    },
    render: function(){
        var autor = this.props.dataElement.autor,
            name = this.props.dataElement.name,
            img = this.props.dataElement.img,
            description = this.props.dataElement.description,
            pages = this.props.dataElement.pages,
            visible = this.state.visible;

        return (
            <div>
                <img src={img} alt={name}/>
                <p className="name"><strong>Title: </strong>{name}</p>
                <p className="autor"><strong>Autor: </strong>{autor}</p>
                <a href="#"
                   onClick={this.readmoreClick}
                   className={'readmore ' + (visible ? 'none': '')}>
                    Learn more
                </a>
                <p className={'desc ' + (visible ? '': 'none')}><strong>Description: </strong>{description}</p>
                <a href="#"
                   onClick={this.hideClick}
                   className={'readmore ' + (visible ? '': 'none')}>
                    Hide
                </a>
                <p className="pages"><strong>Pages: </strong>{pages}</p>
            </div>
        )
    }
});

var LibraryContent = React.createClass({
    propTypes: {
        arrayBook: React.PropTypes.array.isRequired
    },
    getInitialState: function () {
        return{
            counterClick: 0,
            key: 0
        };
    },
    counterClick: function () {
        this.setState({key: this.state.counterClick++ });
        console.log('counterClick - '+this.state.counterClick);
        console.log('key - '+this.state.key);
    },
    render: function() {
        var dataArray = this.props.arrayBook;
        var libraryTemplate;

        if (dataArray.length > 0) {
            libraryTemplate = dataArray.map(function (item, index) {
                return (
                    <div className="book" key={index}>
                        <LibraryItem dataElement={item}/>
                    </div>
                )
            })
        }
        else {
            libraryTemplate = <p className="bookmas">There are no books in the library</p>
        }
        return (
            <div className="library-wrapp">
                {libraryTemplate}
                <div onClick={this.counterClick} className={dataArray.length > 0 ? 'bookmas' : 'booknone'}>Books in library: {dataArray.length}</div>
            </div>
        );
    }
});


var App = React.createClass({
    render: function() {
        return (
            <div className="container">
                <div className="row">
                    <div className="sidebar col-md-2">
                        <MainMenu />
                    </div>
                    <div className="main-content col-md-10">
                        <SearchBook />
                        <LibraryContent arrayBook={library}/>
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);