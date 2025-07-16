// components/ProgramCard.tsx
'use client'

import { Card, CardContent, Typography, Button } from '@mui/material'
import { motion } from 'framer-motion'

export default function ProgramCard({ title, description }: { title: string, description: string }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring' }}>
      <Card sx={{ maxWidth: 345, borderRadius: 4, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" component="div">{title}</Typography>
          <Typography variant="body2" color="text.secondary">{description}</Typography>
          <Button variant="contained" sx={{ mt: 2 }}>Learn More</Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
