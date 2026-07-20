import React from 'react';
import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';

export default function Loader({ isLoading }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: '#0B1120',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1.5rem',
        pointerEvents: isLoading ? 'all' : 'none'
      }}
    >
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {/* Glowing surrounding rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
          style={{
            position: 'absolute',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            border: '2px solid transparent',
            borderTopColor: '#4F46E5',
            borderBottomColor: '#06B6D4'
          }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
          style={{
            position: 'absolute',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            border: '1.5px solid transparent',
            borderLeftColor: '#4F46E5',
            borderRightColor: '#06B6D4',
            opacity: 0.5
          }}
        />
        
        {/* Centered logo icon */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#06B6D4',
            boxShadow: '0 0 20px rgba(79, 70, 229, 0.3)'
          }}
        >
          <Terminal size={24} />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem'
        }}
      >
        <h2 style={{
          color: '#ffffff',
          fontFamily: 'var(--font-sans)',
          fontWeight: 700,
          letterSpacing: '0.1rem',
          fontSize: '1.2rem',
          textTransform: 'uppercase'
        }}>
          Sabarish<span style={{ color: '#06B6D4' }}>.</span>Dev
        </h2>
        <div style={{
          width: '120px',
          height: '2px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '1px',
          overflow: 'hidden',
          position: 'relative'
        }}>
          <motion.div
            initial={{ left: '-100%' }}
            animate={{ left: '100%' }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              width: '60px',
              height: '100%',
              background: 'linear-gradient(90deg, #4F46E5, #06B6D4)'
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
