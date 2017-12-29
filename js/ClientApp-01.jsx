const ce = React.createElement;

const MyTitle = function(props) {
	return ce('div', null, ce('h1', { style: { color: props.color } }, props.title));
};

const MyFirstComponent = function() {
	return ce(
		'div',
		{ id: 'my-first-component' },
		ce(MyTitle, { title: 'title a', color: 'yellowgreen' }),
		ce(MyTitle, { title: 'title b', color: 'greenyellow' }),
		ce(MyTitle, { title: 'title c', color: 'limegreen' }),
		ce(MyTitle, { title: 'title d', color: 'lime' })
	);
};

ReactDOM.render(ce(MyFirstComponent), document.getElementById('app'));
