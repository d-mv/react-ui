import React from 'react';
import { connect } from 'react-redux';

import { State } from '../../store/models/state.model';
import { UserState } from '../../store/models';
import Button from '../../components/Button';
import { setAuthed } from '../../store/actions';

interface HomeProps {
  user: UserState;
  setAuthed: (arg0: boolean) => void;
}

const Home = ({ user, setAuthed }: HomeProps) => {
  const toggleUser = () => setAuthed(true);

  return (
    <div>
      Home
      <Button secondary onClick={toggleUser} title='Toggle user' />
    </div>
  );
};

const mapStateToProps = (state: State) => ({ user: state.user });

export default connect(
  mapStateToProps,
  { setAuthed },
)(Home);
