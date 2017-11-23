import React from 'react';


function PhotosForm({ handleSubmit, handleChange, photo, errors }) {
  return (
    <div className="row">
      <form onSubmit={handleSubmit} className="col-md-6">
        <div className={errors.image ? 'form-group has-error' : 'form-group'}>
          <label htmlFor="image">Image</label>
          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            value={photo.image}
            onChange={handleChange}
          />
          {errors.image && <small className="has-error">{errors.image}</small>}
        </div>
        <div className={errors.description ? 'form-group has-error' : 'form-group'}>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={photo.description}
            onChange={handleChange}
          />
          {errors.description && <small className="has-error">{errors.description}</small>}
        </div>
        <div className={errors.location ? 'form-group has-error' : 'form-group'}>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            value={photo.location}
            onChange={handleChange}
          />
          {errors.location && <small className="has-error">{errors.location}</small>}
        </div>
        <div className={errors.camera ? 'form-group has-error' : 'form-group'}>
          <label htmlFor="camera">Camera</label>
          <input
            type="text"
            className="form-control"
            id="camera"
            name="camera"
            value={photo.camera}
            onChange={handleChange}
          />
          {errors.camera && <small className="has-error">{errors.camera}</small>}
        </div>

        <div>
          <button className="save-button">Save</button>
        </div>
      </form>
    </div>
  );
}

export default PhotosForm;

// import React from 'react';
//
//
// function PhotosForm({ handleSubmit, handleChange, errors, photo }) {
//   console.log('photoForm',photo);
//   return (
//     <div className="row">
//
//       <form onSubmit={handleSubmit} className="col-md-6">
//         <div className={errors.image ? 'form-group has-error' : 'form-group'}>
//           <label htmlFor="image">Image</label>
//           <input
//             type="text"
//             className="form-control"
//             id="image"
//             name="image"
//             value={photo.image}
//             onChange={handleChange}
//           />
//           {errors.image && <small className="has-error">{errors.image}</small>}
//         </div>
//         <div className={errors.description ? 'form-group has-error' : 'form-group'}>
//           <label htmlFor="description">Description</label>
//           <input
//             type="text"
//             className="form-control"
//             id="description"
//             name="description"
//             value={photo.description}
//             onChange={handleChange}
//           />
//           {errors.description && <small className="has-error">{errors.description}</small>}
//         </div>
//         <div className={errors.location ? 'form-group has-error' : 'form-group'}>
//           <label htmlFor="location">Location</label>
//           <input
//             type="text"
//             className="form-control"
//             id="location"
//             name="location"
//             value={photo.location}
//             onChange={handleChange}
//           />
//           {errors.location && <small className="has-error">{errors.location}</small>}
//         </div>
//         <div className={errors.camera ? 'form-group has-error' : 'form-group'}>
//           <label htmlFor="camera">Camera</label>
//           <input
//             type="text"
//             className="form-control"
//             id="camera"
//             name="camera"
//             value={photo.camera}
//             onChange={handleChange}
//           />
//           {errors.camera && <small className="has-error">{errors.camera}</small>}
//         </div>
//         <div>
//           <button className="save-button">Save</button>
//         </div>
//       </form>
//     </div>
//   );
// }
//
// export default PhotosForm;
