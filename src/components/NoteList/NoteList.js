import React from 'react';

class NoteList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      error: null,
      notes: [],
    };

  }

  componentDidMount() {

    fetch('http://localhost:8000/notes')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error retrieving notes');
        }

        return res.json();
      })
      .then((notes) => {
        this.setState({ notes });
      })
      .catch((err) => {
        this.setState({ error: err.message });
      })
  }

  render() {

    const items = this.state.notes.map((n, i) => {

      return (
        <li key={i}>
          {n.body} - {n.owner}
        </li>
      );
    });

    return (
      <ul>
        { items }
      </ul>
    );
  }
}

export default NoteList;
