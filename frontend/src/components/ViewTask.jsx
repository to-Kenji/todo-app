import React from 'react';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';

const TasksPaper = styled(Paper)`
  margin-top: 20px;
  margin-bottom: 20px;
  height: 30px;
  padding: 10px;
  align-items: center;
  display: flex;
`;

const TaskTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TrashButton = styled(DeleteIcon)`
  cursor: pointer;
  color: #3f51b5;
`;
const CustomGrid = styled(Grid)`
  display: flex;
  align-items: center;
`;
export const ViewTask = (props) => {
  return (
    <TasksPaper>
      <Grid container justify="space-between">
        <Grid item xs={10}>
          <TaskTitleWrapper>
            <p>{props.task.title}</p>
          </TaskTitleWrapper>
        </Grid>
        <CustomGrid item xs={2}>
          <TrashButton onClick={() => props.handleDelete(props.task)} />
        </CustomGrid>
      </Grid>
    </TasksPaper>
  )
}