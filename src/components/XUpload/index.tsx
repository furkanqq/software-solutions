import styles from './index.module.scss';

import React, { useState } from 'react';

interface IProps {
  func: (data: File | null) => void;
  label?: string;
}

export const XUpload: React.FC<IProps> = ({ label, func }) => {
  const [dragOver, setDragOver] = useState(false);
  const [selected, setSelected] = useState<File | null>(null);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      setSelected(file);
      setDragOver(false);
      func(file);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setSelected(file);
      func(file);
    }
  };

  const handleClick = () => {
    const fileInput = document.getElementById('fileInput') as HTMLElement;
    fileInput.click();
  };

  return (
    <div>
      <label className={styles.label}>CV</label>
      <div
        className={`${styles.file_upload} ${dragOver ? styles.drag_over : ''}`}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onClick={handleClick}
        onDrop={handleDrop}>
        <p>{label ? label : '+ Dosya Ekle'}</p>
        {selected ? (
          <span className={styles.raquo}>&raquo;</span>
        ) : (
          <span className={styles.raquo}>+</span>
        )}
        <span>{selected?.name}</span>
        <input
          onChange={handleFileSelect}
          style={{ display: 'none' }}
          id="fileInput"
          type="file"
        />
      </div>
    </div>
  );
};
