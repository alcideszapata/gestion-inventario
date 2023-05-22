const DataMaterials = () => {
  return <div className="flex flex-row">
    <label htmlFor="filtro-material">
        <span>Filtrar Artículo</span>
        <input name="filtro-material" type="string" />
    </label>
    <div className='flex w-full gap-3 justify-end items-end'>
        <button type='button' className='secondary'>Aceptar</button>
      </div>
  </div>;
};

export {DataMaterials };