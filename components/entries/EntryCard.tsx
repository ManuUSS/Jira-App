import { DragEvent, FC, useContext } from 'react';
import { Badge, Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";
import { Entry } from '../../types/entry';
import { UIContext } from '../../context/ui/UIContext';
import { useRouter } from 'next/router';
import { getFormatDate } from '../../utils/dateFunctions';


interface Props {
  entry: Entry
}

export const EntryCard: FC<Props> = ({ entry }) => {
  
  const { startDragging, endDragging } = useContext( UIContext );

  const router = useRouter();

  const statusEntry = entry.status;

  const onDragStart = ( event:DragEvent<HTMLDivElement> ) => {
    event.dataTransfer.setData('text', entry._id )
    startDragging();
  }

  const onDragEnd = () => {
    endDragging();
  }

  const onClick = () => {
    router.push(`/entries/${ entry._id }`);
  }

  return (
    <Card 
      sx={{ marginBottom: 1 }}
      draggable
      onDragStart={ onDragStart }
      onDragEnd={ onDragEnd }
      onClick={ onClick }
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>{ entry.description }</Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2, alignItems: 'center', gap: '10px' }}>
          <Badge 
            color={ statusEntry === 'pending' ? 'error' : statusEntry === 'finished' ? 'success' : 'info' } 
            variant="dot"  
            anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
          />
          <Typography variant="body2">{ getFormatDate(entry.createdAt) }</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}
