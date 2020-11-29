<template>
	<div class="create-type-of-gift">
		<CCard>
			<CCardHeader>
				<h4><b>Добавить подарок</b></h4>
			</CCardHeader>
			<CCardBody>
				<CRow>
					<CCol md="6">
						<CInput 
						label="Тип подарка" 
						placeholder="Например, книга"
						 />
					</CCol>
				</CRow>

				<CRow>
					<CCol md="6">
						<CTextarea 
						label="Описание" 
						placeholder="Введите описание подарка"
						rows="4" />
					</CCol>
				</CRow>
				<CRow>
					<CCol md="6">
						<CInputFile
						label="Фото"
						horizontal
					/>
					</CCol>
				</CRow>
			</CCardBody>
			<CCardFooter>
            <CButton type="submit" size="sm" color="primary"><CIcon name="cil-check-circle"/> Сохранить</CButton>
            <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Сбросить</CButton>
          </CCardFooter>
		</CCard>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {

		},
	};
</script>

<style></style>
