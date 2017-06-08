var todoList = [
    {
        "task":"task1",
    },
    {
        "task":"task2",
    },
    {
        "task":"task3",
    },
    {
        "task":"task4",
    },
    {
        "task":"task5",
    }
];

var TodoListItem = React.createClass({
    propTypes: {
        todoListItem:React.PropTypes.shape({
            task: React.PropTypes.string.isRequired
        })
    },
    getInitialState: function () {
        return{
            visible: false
        };
    },
    clickCloseButton:function (e) {
        e.preventDefault();
        this.setState({visible:true});
    },

    render: function(){
        var task = this.props.todoListItem.task,
            visible = this.state.visible;
        var todolistTask = {
            fontSize:'18px',
            borderBottom:'1px solid #ededed',
            padding:'10px'};

        return (
            <div style={todolistTask} className={(visible ? 'none': '')} >
                <input type="checkbox" style={{display:'inline-block', margin:'0 10px'}}/>
                <span style={{padding:'0 20px', width:'280px', display:'inline-block' }}>{task}</span>
                <span>Total time is 00:00:00 <button style={{margin:'0 10px', border:'1px solid rgba(33, 150, 243, 0.3)', outline:'none', borderRadius:'3px', background:'transparent'}}>Start</button> </span>
                <a onClick={this.clickCloseButton} href="#" className={(visible ? 'none': '')}
                   style={{textDecoration: 'none',color: '#1e1e1e'}}>X</a>
            </div>
        )
    }
});


var TodoList = React.createClass({
    propTypes: {
        todoListArray: React.PropTypes.array.isRequired
    },
    render: function() {
        var dataArray = this.props.todoListArray;
        var todoListTemplate;

        if (dataArray.length > 0) {
            todoListTemplate = dataArray.map(function (item, index) {
                    return (
                    <div key={index} className="">
                        {/*<input type="checkbox" value={index} style={{display:'inline-block', margin:'0 10px'}}/>*/}
                        {/*<span className="task" style={{padding:'0 20px', width:'280px', display:'inline-block' }}>{item.task}</span>*/}
                        <TodoListItem todoListItem={item}/>
                        {/*<span>Total time is 00:00:00 <button style={{margin:'0 10px', border:'1px solid rgba(33, 150, 243, 0.3)', outline:'none', borderRadius:'3px', background:'transparent'}}>Start</button> </span>*/}
                        {/*<a href="#">X</a>*/}
                    </div>
                    )
            })
        }
        else {
            todoListTemplate = <p>Create task</p>
        }
        return (
            <div className="">
                {todoListTemplate}
                <div className={dataArray.length > 0 ? '' : 'none'} style={{padding:'20px'}}>{dataArray.length} items left</div>
            </div>
        );
    }
});


var App = React.createClass({
    render: function() {
        return (
            <div className="todolist">
                <h1>Create your plans</h1>
                <input className="task-input" type="text" placeholder="What should be done?"/>
                <div className="todolist-wrapper">
                    <TodoList todoListArray={todoList} />
                </div>
            </div>
        );
        }
});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


