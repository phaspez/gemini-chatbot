import { Table } from "flowbite-react";

export default function UploadTable() {
	return (
		<div className="overflow-x-auto">
			<Table hoverable>
				<Table.Head>
					<Table.HeadCell>Các đề mục</Table.HeadCell>
					<Table.HeadCell>
						<span className="sr-only">Tải file lên</span>
					</Table.HeadCell>
				</Table.Head>
				<Table.Body className="divide-y">
					<Table.Row className="bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
						<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
							Trường ĐHCT
						</Table.Cell>
						<Table.Cell>
							<a
								href="#"
								className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
							>
								Cập nhật
							</a>
						</Table.Cell>
					</Table.Row>
					<Table.Row className="bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
						<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
							Trường CNTT&TT
						</Table.Cell>
						<Table.Cell>
							<a
								href="#"
								className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
							>
								Cập nhật
							</a>
						</Table.Cell>
					</Table.Row>
					<Table.Row className="bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
						<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
							Trường Kinh Tế
						</Table.Cell>
						<Table.Cell>
							<a
								href="#"
								className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
							>
								Cập nhật
							</a>
						</Table.Cell>
					</Table.Row>
					<Table.Row className="bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
						<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
							Trường Nông nghiệp
						</Table.Cell>
						<Table.Cell>
							<a
								href="#"
								className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
							>
								Cập nhật
							</a>
						</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>
		</div>
	);
}
