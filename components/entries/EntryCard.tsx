import { DragEvent, FC, useContext } from 'react';
import { Badge, Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";
import { Entry } from '../../types/entry';
import { UIContext } from '../../context/ui/UIContext';
import styles from './EntryCard.module.css';

interface Props {
  entry: Entry
}

export const EntryCard: FC<Props> = ({ entry }) => {

  const { startDragging, endDragging } = useContext( UIContext );

  const statusEntry = entry.status;

  const onDragStart = ( event:DragEvent<HTMLDivElement> ) => {
    event.dataTransfer.setData('text', entry._id )
    startDragging();
  }

  const onDragEnd = () => {
    endDragging();
  }

  return (
    <Card 
      sx={{ marginBottom: 1 }}
      draggable
      onDragStart={ onDragStart }
      onDragEnd={ onDragEnd }
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>{ entry.description }</Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2, alignItems: 'center', gap: '10px' }}>
          <Badge color={ statusEntry === 'pending' ? 'error' : statusEntry === 'finished' ? 'success' : 'info' } variant="dot"  anchorOrigin={{ vertical: 'top', horizontal: 'left' }}>
            <Typography variant="body2">Hace 15 Minutos</Typography>
          </Badge>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}
