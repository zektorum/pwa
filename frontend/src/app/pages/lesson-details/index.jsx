import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box, Typography,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useParams } from 'react-router-dom';
import LessonDescription from '../../components/lesson-description';
import getLessonSlice from '../../core/slices/lesson/getLesson';

const LessonDetailsPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { lesson, errorMessage } = useSelector(state => state.lesson);

  useEffect(() => {
    dispatch(getLessonSlice(id));
  }, []);

  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          width: '100%', minHeight: '64px', px: '29px', boxShadow: '0px 8px 16px rgba(46, 60, 80, 0.1)', mb: '32px',
        }}
      >
        <Typography component={Link} to="/search-lessons" fontSize="24px" fontWeight="500" color="text.secondary" sx={{ textDecoration: 'none' }}>
          <ArrowBackIcon sx={{ mr: '14px', verticalAlign: '-2px' }} fontSize="medium" color="action" />
          Назад
        </Typography>
        <SettingsIcon color="disabled" />
      </Box>
      <Box width="100%">
        {errorMessage && (
          <Typography color="error.main">
            Error:
            {errorMessage}
          </Typography>
        )}
        <LessonDescription />
        {/* {lesson && console.log(lesson)} */}
      </Box>
    </>
  );
};

export default LessonDetailsPage;
