import styles from './index.module.scss';
import React, { useState } from 'react';

interface IProps {
  func: (data: FileList | null) => void;
  label?: string;
}

export const XUpload: React.FC<IProps> = ({ label, func }) => {
  const [dragOver, setDragOver] = useState(false);
  const [selected, setSelected] = useState<FileList | null>(null);

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
    setSelected(files);
    setDragOver(false);
    func(files);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    setSelected(files);
    func(files);
  };

  const handleClick = () => {
    document.getElementById('fileInput').click();
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
        <span>{selected && selected[0]?.name}</span>
        <input onChange={handleFileSelect} id="fileInput" type="file" />
      </div>
    </div>
  );
};
