import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import CountUp from 'react-countup';
import   './css/CardsCompo.css';

const CardComponent = ({className,cardTitle,cardSubtitle,value}) => (
  <Card   xs={12} md={3} component={Card} className="mywidth">
  <CardContent>
    <Typography color="textSecondary" gutterBottom>
    {cardTitle}
    </Typography>
    <Typography variant="h5" component="h2">
    <CountUp start={0} end={value} duration={2.75} separator="," />
    </Typography>
    <Typography color="textSecondary">
      adjective
    </Typography>
    <Typography variant="body2" component="p">
    {cardSubtitle}
    </Typography>
  </CardContent>
</Card>
);
export default CardComponent;
